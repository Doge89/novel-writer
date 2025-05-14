import { useMemo } from "react";
import axios, { AxiosInstance } from 'axios';
import {AxiosBuilderOptions} from "@/app/_typescript/interfaces/utils/AxiosBuilderOptions";

import { SERVICE_URL } from "@/app/_typescript/constants";

const useAxiosBuilder = <T = unknown, D = unknown>(baseURL: string, options?: Omit<AxiosBuilderOptions<T, D>, 'baseURL'>): AxiosInstance => {
  const { requestInterceptor, responseInterceptor, ...config } = options || {};
  const axiosInstance = useMemo(() => {
    const instance = axios.create({
      baseURL: `${SERVICE_URL}${baseURL}`,
      ...config,
    });
    if (requestInterceptor) {
      axiosInstance.interceptors.request.use(requestInterceptor);
    }
    if (responseInterceptor) {
      axiosInstance.interceptors.response.use(responseInterceptor);
    }
    return instance;
  }, [baseURL, config, requestInterceptor, responseInterceptor]);
  return axiosInstance;
}

export { useAxiosBuilder };
