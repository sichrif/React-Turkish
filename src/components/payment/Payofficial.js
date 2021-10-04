import React from 'react';
// Components
import HomePage from './HomePage';
// Stripe
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CssBaseline from '@material-ui/core/CssBaseline';
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';

// Styles
//import './paystyle.module.scss';
 
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUB_KEY);

function Payofficial() {
  return (
      <>
    <CssBaseline />
    
    <Elements stripe={stripePromise}>
      <HomePage />
    </Elements>
    </>
  );
}

export default Payofficial;
