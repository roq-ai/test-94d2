import axios from 'axios';
import queryString from 'query-string';
import { GameResultInterface, GameResultGetQueryInterface } from 'interfaces/game-result';
import { GetQueryInterface } from '../../interfaces';

export const getGameResults = async (query?: GameResultGetQueryInterface) => {
  const response = await axios.get(`/api/game-results${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createGameResult = async (gameResult: GameResultInterface) => {
  const response = await axios.post('/api/game-results', gameResult);
  return response.data;
};

export const updateGameResultById = async (id: string, gameResult: GameResultInterface) => {
  const response = await axios.put(`/api/game-results/${id}`, gameResult);
  return response.data;
};

export const getGameResultById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/game-results/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteGameResultById = async (id: string) => {
  const response = await axios.delete(`/api/game-results/${id}`);
  return response.data;
};
