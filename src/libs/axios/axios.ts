import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { AxiosService } from "./axios.service";

class Axios extends AxiosService {
  private instance: AxiosInstance;
  constructor() {
    const axiosInstance = axios.create({
      baseURL: "https://api.escuelajs.co/api/v1/",
    });
    super(axiosInstance);
    this.instance = axiosInstance;
  }

  api_get = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return this.instance.get(url, config);
  };
}

const api = new Axios();
export { api };
