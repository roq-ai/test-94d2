import { FavoriteTeamInterface } from 'interfaces/favorite-team';
import { GameResultInterface } from 'interfaces/game-result';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  favorite_team?: FavoriteTeamInterface[];
  game_result?: GameResultInterface[];
  user?: UserInterface;
  _count?: {
    favorite_team?: number;
    game_result?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
