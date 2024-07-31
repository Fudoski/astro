import axios from "axios";

export const AuthService = {
  login: async function ({ username, password }: LoginRequest) {
    return axios
      .post("/auth/login", {
        username,
        password,
      })
      .then((res) => res.data.token as string)
      .then((token) => {
        localStorage.setItem("AUTH", token);
        return token;
      });
  },
};
