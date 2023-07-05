const mapping: Record<string, string> = {
  'favorite-teams': 'favorite_team',
  'game-results': 'game_result',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
