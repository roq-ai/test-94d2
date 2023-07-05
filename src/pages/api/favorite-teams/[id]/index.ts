import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { favoriteTeamValidationSchema } from 'validationSchema/favorite-teams';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.favorite_team
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getFavoriteTeamById();
    case 'PUT':
      return updateFavoriteTeamById();
    case 'DELETE':
      return deleteFavoriteTeamById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getFavoriteTeamById() {
    const data = await prisma.favorite_team.findFirst(convertQueryToPrismaUtil(req.query, 'favorite_team'));
    return res.status(200).json(data);
  }

  async function updateFavoriteTeamById() {
    await favoriteTeamValidationSchema.validate(req.body);
    const data = await prisma.favorite_team.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteFavoriteTeamById() {
    const data = await prisma.favorite_team.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
