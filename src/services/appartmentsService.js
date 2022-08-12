import axios from 'axios';

axios.defaults.baseURL = 'https://apt-booking-api.herokuapp.com/';

export const getAppartmentsList = () => {
  return axios.get('/apartments');
};

export const getAppartmentById = (id) => {
  return axios.get(`/apartments/${id}`);
};