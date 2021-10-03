import axios from 'axios';

const API_URL =process.env.REACT_APP_BACKEND_URL + '/api/auth/';

const register = async (
  email,
  password,
  passwordConfirm,
  firstname,
  lastname,
  stripe
) => {
await axios
    .post(API_URL + 'register', {
      email,
      password,
      passwordConfirm,
      firstname,
      lastname
    })
    .then((response) => {
      console.log(response);
      const API_URL_checkout =process.env.REACT_APP_BACKEND_URL + '/api/checkout/checkout/';
      const datta = {
        subsId:response.data.savedUser.subsId
      }
      axios.post(API_URL_checkout,datta)
  .then((result) => {console.log(result.data.sessionId);stripe.redirectToCheckout({sessionId:result.data.sessionId})})
  .catch(err=>console.log(err))
      return response;
    })
    .catch((error) => {
      return error;
    });
};
const login = (email, password) => {
  return axios
    .post(API_URL + 'login', {
      email,
      password
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
};

export default {
  register,
  login,
  logout
};
