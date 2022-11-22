import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_GEOAPIFY,
});

api.interceptors.request.use((config) => {
  config.url = config.url + `&apiKey=${process.env.NEXT_PUBLIC_API_KEY_GEOAPIFY}`;
  return config;
});

export const geoapifyApi = {
  geocodeReversePost: async (data: number[][]) => {
    return await api.post('/batch/geocode/reverse?', data);
  },
  geocodeReverseGet: (id: string) => {
    return api.get(`/batch/geocode/reverse?id=${id}`);
  },
};
