import axios, { AxiosResponse, AxiosRequestConfig } from "axios";

export function $get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R> {
    // get<T = any, R = AxiosResponse<T>, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
    return axios.get<T, R, D>(url, config)
}