import React, {useState} from 'react';
import axios from 'axios';
// MUI Components
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
// stripe
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
// Util imports
import {makeStyles} from '@material-ui/styles';
// Custom Components
import CardInput from './CardInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';
 import { Icon } from '@iconify/react';
import { useFormik, Form, FormikProvider } from 'formik';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { useNavigate } from 'react-router-dom';
// material
import { Stack, IconButton, InputAdornment } from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { register  } from "../../actions/auth";
const useStyles = makeStyles({
  root: {
    maxWidth: 500,
 
    
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'flex-start',
  },
  div: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    paddingBottom: '7%'
  },
  button: {
    margin: '2em auto 1em',
  },
});

function HomePage() {
  const classes = useStyles();
  // State
  const [email, setEmail] = useState('');

  const stripe = useStripe();
  const elements = useElements();
  
  // const handleSubmitPay = async (event) => {
  //   if (!stripe || !elements) {
  //     // Stripe.js has not yet loaded.
  //     // Make sure to disable form submission until Stripe.js has loaded.
  //     return;
  //   }

  //   const res = await axios.post(process.env.REACT_APP_BACKEND_URL+'/api/checkout/pay', {email: email});

  //   const clientSecret = res.data['client_secret'];

  //   const result = await stripe.confirmCardPayment(clientSecret, {
  //     payment_method: {
  //       card: elements.getElement(CardElement),
  //       billing_details: {
  //         email: email,
  //       },
  //     },
  //   });

  //   if (result.error) {
  //     // Show error to your customer (e.g., insufficient funds)
  //     console.log(result.error.message);
  //   } else {
  //     // The payment has been processed!
  //     if (result.paymentIntent.status === 'succeeded') {
  //       console.log('Money is in the bank!');
  //       // Show a success message to your customer
  //       // There's a risk of the customer closing the window before callback
  //       // execution. Set up a webhook or plugin to listen for the
  //       // payment_intent.succeeded event that handles any business critical
  //       // post-payment actions.
  //     }
  //   }
  // };
///////////////////////////
const navigate = useNavigate();
const [showPassword, setShowPassword] = useState(false);
const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
const { isLoggedIn } = useSelector(state => state.auth);

const dispatch = useDispatch();

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First name required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
  passwordConfirm:Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const formik = useFormik({
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm:''
  },
  validationSchema: RegisterSchema,
  onSubmit: (values,{ setSubmitting }) => {
   // navigate('/dashboard', { replace: true });
    dispatch(register(values.email, values.password, values.passwordConfirm, values.firstName, values.lastName,stripe))
    .then(() => {
       setSubmitting(false);
 
  //    navigate('/login', { replace: true });
    //  window.location.reload();
    })
    .catch((e) => {
      setSubmitting(false);
      console.log(e);
    });
  }
  
});
// const handleSubmitSub = async (event) => {
//   if (!stripe || !elements) {
//     // Stripe.js has not yet loaded.
//     // Make sure to disable form submission until Stripe.js has loaded.
//     return;
//   }

//   const result = await stripe.createPaymentMethod({
//     type: 'card',
//     card: elements.getElement(CardElement),
//     billing_details: {
//       email: email,
//     },
//   });

//   if (result.error) {
//     console.log(result.error.message);
//   } else {
//     const res = await axios.post(process.env.REACT_APP_BACKEND_URL+'/api/checkout/sub', {'payment_method': result.paymentMethod.id, 'email': email});
//     // eslint-disable-next-line camelcase
//     const {client_secret, status} = res.data;
//     console.log(status);

//     if (status === 'requires_action') {
//       console.log('There was an issue!');

//       stripe.confirmCardPayment(client_secret).then(function(result) {
//         if (result.error) {
//           console.log('There was an issue!');
//           console.log(result.error);
//           // Display error message in your UI.
//           // The card was declined (i.e. insufficient funds, card has expired, etc)
//         } else {
//           console.log('You got the money!');
//           // Show a success message to your customer
//         }
//       });
//     } else {
//       console.log('You got the money!');
//       // No additional information was needed
//       // Show a success message to your customer
//     }
//   }
// };

const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

if (isLoggedIn) {
  return <Navigate to="/dashboard" />;
}



  ///////////////////////

  return (
    
    <FormikProvider value={formik}>
    <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
     <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <TextField
              fullWidth
              label="First name"
              {...getFieldProps('firstName')}
              error={Boolean(touched.firstName && errors.firstName)}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              fullWidth
              label="Last name"
              {...getFieldProps('lastName')}
              error={Boolean(touched.lastName && errors.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Stack>

          <TextField
            fullWidth
            autoComplete="username"
            type="email"
            label="Email address"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="Password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <TextField
            fullWidth
            autoComplete="confirm-password"
            type={showPasswordConfirm ? 'text' : 'password'}
            label="Confirm password"
            {...getFieldProps('passwordConfirm')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" onClick={() => setShowPasswordConfirm((prev) => !prev)}>
                    <Icon icon={showPasswordConfirm ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={touched.passwordConfirm && errors.passwordConfirm}
            helperText={touched.passwordConfirm && errors.passwordConfirm}
           
 
          />
        
        </Stack>

        <div className={classes.div}>
          {/* <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmitPay}>
            Pay
          </Button> */}
          <LoadingButton     fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
             variant="contained" color="primary" className={classes.button} >
          Register
          </LoadingButton>
        </div>
      </CardContent>
    </Card>
    
    </Form>
    </FormikProvider>
    );
}

export default HomePage;
