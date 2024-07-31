import axios from "axios";
import withAuthConfig from "../utils/AuthHelper";

export const UserService = {
  getUserProfile: async function () {
    return axios.get("/users/me", withAuthConfig());
  },
};
