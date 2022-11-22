import axios from 'axios';
import { JobResponse } from '../interfaces/job';

const api = axios.create({
  baseURL: process.env.BASE_URL_DATA,
});

api.interceptors.request.use(config => {
  if (!config.headers) {
    config.headers = {};
  }
  config.headers['Authorization'] = `Bearer ${process.env.BEARER_TOKEN_DATA}`;

  return config;
});

const jobsApi = {
  fetchAllJobs: () => {
    return api.get<JobResponse>('');
  },
};

export default jobsApi;
