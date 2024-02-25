import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_STARWARS_API_URL;

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const starWarsData = async (searchProp: string) => {
  try {
    const response = await apiService.get(searchProp);
    return response.data;
  } catch (error) {
    throw error;
  }
};