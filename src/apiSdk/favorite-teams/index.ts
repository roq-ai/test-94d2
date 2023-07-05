import axios from 'axios';
import queryString from 'query-string';
import { FavoriteTeamInterface, FavoriteTeamGetQueryInterface } from 'interfaces/favorite-team';
import { GetQueryInterface } from '../../interfaces';

export const getFavoriteTeams = async (query?: FavoriteTeamGetQueryInterface) => {
  const response = await axios.get(`/api/favorite-teams${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createFavoriteTeam = async (favoriteTeam: FavoriteTeamInterface) => {
  const response = await axios.post('/api/favorite-teams', favoriteTeam);
  return response.data;
};

export const updateFavoriteTeamById = async (id: string, favoriteTeam: FavoriteTeamInterface) => {
  const response = await axios.put(`/api/favorite-teams/${id}`, favoriteTeam);
  return response.data;
};

export const getFavoriteTeamById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/favorite-teams/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFavoriteTeamById = async (id: string) => {
  const response = await axios.delete(`/api/favorite-teams/${id}`);
  return response.data;
};
