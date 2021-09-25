import axios from "axios";
import {useStripe, useElements} from '@stripe/react-stripe-js';

import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:5000/api/auth/";

 const register =async (stripe,elements,CardElement,email, password,passwordConfirm,firstname,lastname) => {
  if (!stripe || !elements) {
    // Stripe.js has not yet loaded.
    // Make sure to disable form submission until Stripe.js has loaded.
    return;
  }
  
  const result = await stripe.createPaymentMethod({
    type: 'card',
    card: elements.getElement(CardElement),
    billing_details: {
      email: email,
    },
  });
  
  if (result.error) {
    console.log(result.error.message);
  }else {
    const res = await axios.post(API_URL + "register", {'payment_method': result.paymentMethod.id, email,
    password,
    passwordConfirm,
    firstname,
    lastname});
    // eslint-disable-next-line camelcase
    const {client_secret, status} = res.data;

    if (status === 'requires_action') {
      stripe.confirmCardPayment(client_secret).then(function(result) {
        if (result.error) {
          console.log('There was an issue!');
          console.log(result.error);
          // Display error message in your UI.
          // The card was declined (i.e. insufficient funds, card has expired, etc)
        } else {
          console.log('You got the money!');
          // Show a success message to your customer
          return res;

        }
      });
    } else {
      console.log('You got the money!');
      return res;
      // No additional information was needed
      // Show a success message to your customer
    }

 
};
 }
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
