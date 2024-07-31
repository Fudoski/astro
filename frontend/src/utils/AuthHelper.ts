import { AxiosRequestConfig } from "axios";

export default function withAuthConfig() {
  const token = localStorage.getItem("AUTH");
  const requestConfig: AxiosRequestConfig = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return requestConfig;
}
