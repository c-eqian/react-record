import axios, { type AxiosInstance } from 'axios';
import {
  requestFailHandler,
  requestFulfilledHandler,
  responseFailHandler,
  responseHandler
} from '@/hooks/request/handler.ts';
import type { IRequestParamsConfig } from './type';
const baseConfig = {
  // 默认地址
  // baseURL: 'http://43.138.188.22:13209/api/v3',
  // baseURL: import.meta.env.VITE_BASE_URL,
  // 设置超时时间
  timeout: 10000,
  retry: 3,
  retryDelay: 1000,
  // 跨域时候允许携带凭证
  withCredentials: true
};
export class RequestHttp {
  // 定义成员变量并指定类型
  #service: AxiosInstance;
  public constructor(config?: IRequestParamsConfig) {
    const _config = Object.assign(baseConfig, config);
    // 实例化axios
    this.#service = axios.create(_config);

    this.#service.interceptors.request.use(
      // @ts-ignore
      (...args) => requestFulfilledHandler({ ...args, ..._config }),
      requestFailHandler
    );
    // @ts-ignore
    this.#service.interceptors.response.use(responseHandler, responseFailHandler);
  }
}
