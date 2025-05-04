import { message } from 'antd';
import axios, { type AxiosError } from 'axios';
import type { IRequestParamsConfig, IResponse, IResult } from './type';
const baseUrl = import.meta.env.VITE_BASE_URL;
/**
 * 参数处理
 * @param {*} params  参数
 */
export function tansParams(params: { [x: string]: any }) {
  let result = '';

  for (const propName of Object.keys(params)) {
    const value = params[propName];
    const part = `${encodeURIComponent(propName)}=`;
    if (value !== null && value !== '' && typeof value !== 'undefined') {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && value[key] !== '' && typeof value[key] !== 'undefined') {
            const _params = `${propName}[${key}]`;
            const subPart = `${encodeURIComponent(_params)}=`;
            result += `${subPart + encodeURIComponent(value[key])}&`;
          }
        }
      } else {
        result += `${part + encodeURIComponent(value)}&`;
      }
    }
  }
  return result;
}

/**
 * 请求成功拦截
 */
export const requestFulfilledHandler = (conf: IRequestParamsConfig) => {
  // 处理完整的 URL. 非 http, https 的才处理
  const isExternal = /^(https?:)/.test(conf.url!);
  if (!isExternal) {
    conf.url = `${baseUrl}${conf.url!.replace(/^\//, '')}`;
  }
  if (conf.method === 'get') {
    conf.params = {
      ...conf.params
    };
    conf.url = `${conf.url}?${tansParams(conf.params)}`.slice(0, -1);
    conf.params = {};
  }
  return conf;
};
/**
 * 请求失败拦截
 */
export const requestFailHandler = (error: AxiosError) => {
  return Promise.reject(error);
};

export const responseHandler = (response: IResponse) => {
  if (response.config.isExtra) {
    return response;
  }
  const { data } = response; // 解构
  if (response.config.isShowSuccessText) {
    return message.success(data.msg);
  }
  return data;
};

export const responseFailHandler = (error: AxiosError) => {
  const { response } = error;
  if (axios.isCancel(error)) return; // 防止取消请求引起响应异常
  if (!window.navigator.onLine) {
    return message.error('网络连接失败');
  }
  if ((response?.data as IResult).code === 432 || (response?.data as IResult).code === 401) {
    // 登录过期或令牌无效
    setTimeout(() => {
      window.location.href = `/login`;
    }, 1000);
  } else {
    return message.error((response?.data as IResult)?.msg || '请求失败');
  }

  return Promise.reject(error);
};
