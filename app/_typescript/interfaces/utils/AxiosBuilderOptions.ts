import { CreateAxiosDefaults, InternalAxiosRequestConfig, AxiosResponse } from 'axios'

export interface AxiosBuilderOptions<T = unknown, D = unknown> extends CreateAxiosDefaults {
  requestInterceptor?(config: InternalAxiosRequestConfig<D>): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;
  responseInterceptor?(config: AxiosResponse<T, D>): AxiosResponse<T, D> | Promise<AxiosResponse<T, D>>;
}
