import axios from "axios";
import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:5000/api/auth/";

 const register = (username, email, password,passwordConfirm,firstname,lastname) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
    passwordConfirm,
    firstname,
    lastname
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  };

export default {
  register,
  login,
  logout,
};
