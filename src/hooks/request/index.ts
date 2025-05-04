import { RequestHttp } from './request';

export const http = new RequestHttp({
  headers: {
    'Content-Type': 'application/json'
  },
  cache: false,
  isLoading: false
});
