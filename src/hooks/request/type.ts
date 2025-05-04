import type { AxiosRequestConfig, AxiosResponse } from 'axios';

export type RequestType = 'GET' | 'HEAD' | 'POST' | 'DELETE' | 'OPTIONS' | 'PUT' | 'CONNECT';
export interface IUniConfig {
  baseUrl: string;
  data?: object | string | ArrayBuffer;
  header?: object;
  method?: RequestType;
  timeout?: number;
}
// 数据返回的接口
// 定义请求响应参数，不含data
export interface IResult<T = any> {
  code?: number;
  msg?: string;
  status?: number;
  result?: T;
}

// @ts-ignore
export interface IRequestParamsConfig extends AxiosRequestConfig {
  isCancel?: boolean;
  isLoading?: boolean;
  loadingIcon?: string;
  loadingText?: string;
  isExtra?: boolean;
  isShowSuccessText?: boolean;
  cache?: boolean;
  header?: {
    'Content-Type': string;
  };
}

// 请求响应参数，包含data
// @ts-ignore
export interface IResponse extends AxiosResponse {
  data: IResult;
  config: IRequestParamsConfig;
}
