import { TFetcher } from "@/types/types";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
export const fetcher = async <T>(
  url: string,
  r: AxiosRequestConfig
): Promise<TFetcher<T>> => {
  try {
    const rr = await axios(process.env.NEXT_PUBLIC_API_URL + url, r);
    return {
      status: true,
      data: rr.data,
      statusText: rr.statusText,
      code: rr.status,
    };
  } catch (e) {
    if (e instanceof AxiosError) {
      return {
        error: e.message,
        status: false,
        data: e.response?.data?.message?.data,
        config: e.config,
        code: e.response,
      };
    }
    if (e instanceof Error) {
      return {
        error: e.message,
        status: false,
        code: 500,
      };
    }
    return { error: e, status: false, code: 500 };
  }
};
