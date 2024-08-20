import axios from "axios";
import withAuthConfig from "../utils/AuthHelper";

export const UserService = {
  getUserProfile: async function () {
    return axios.get("/users/me", withAuthConfig());
  },

  isAuthenticated: async function () {
    const token = localStorage.getItem("AUTH");
    if (token) {
      return this.getUserProfile()
        .then(() => true)
        .catch(() => false);
    } else {
      return false;
    }
  },
};
