import axios from "axios";
import store from "../vuex/store";

const axiosInstance = axios.create({
  baseURL: "https://apt-booking-api.herokuapp.com/",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = store.state.auth;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const registerUser = (payload) => {
  return axiosInstance.post("/users/register", payload);
};

export const loginUser = (payload) => {
  return axiosInstance.post("/users/login", payload);
};

export const logoutUser = () => {
  return axiosInstance.post("/users/logout");
};

export const getAppartmentsList = () => {
  return axiosInstance.get("/apartments");
};

export const getAppartmentById = (id) => {
  return axiosInstance.get(`/apartments/${id}`);
};
