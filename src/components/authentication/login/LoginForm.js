import * as Yup from 'yup';
import React, { useState, useRef } from "react";
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
 import { useFormik, Form, FormikProvider } from 'formik';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
import { Navigate } from 'react-router-dom';
import { loadStripe } from "@stripe/stripe-js";

// material
import {
  Link,
  Stack,
  Checkbox,
  TextField,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Alert,

  
} from '@material-ui/core';
import { LoadingButton } from '@material-ui/lab';
import { login } from "../../../actions/auth";
import axios from 'axios';

// ----------------------------------------------------------------------

export default function LoginForm(props) {
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUB_KEY);

  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { isLoggedIn } = useSelector(state => state.auth);
  const  {message}  = useSelector(state => state.message);
  
  const dispatch = useDispatch();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required')
  });
const reddirect =async (email) =>{
  console.log(email);
  try {
    const stripe = await stripePromise;
    const API_URL_checkout =process.env.REACT_APP_BACKEND_URL + '/api/checkout/checkoutlogin/';
    const datta = {
      subsId:email
    }
    axios.post(API_URL_checkout,datta)
.then((result) => {console.log(result);stripe.redirectToCheckout({sessionId:result.data.sessionId})})
.catch(err=>console.log(err))
  } catch (errorr) {
    console.log(errorr)
  }  
}
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: (values, { setSubmitting }) => {
      setAlert(false);
   //   navigate('/dashboard', { replace: true });
      dispatch(login(values.email, values.password))
      .then(() => {
        setSubmitting(false);
        navigate('/dashboard/app', { replace: true });
       // window.location.reload();
      })
      .catch(err => {
        console.log(message);
         setError(message);
        setAlert(true);
        setSubmitting(false);
        if(message=="You don't have any subscription"){
          reddirect(values.email);
        
        }
      });
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;

  }
   return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            autoComplete="email"
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
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
        </Stack>
        <div>
        {alert ? <Alert severity='error'>{error}</Alert> : <></> }
        
        </div>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
          <FormControlLabel
            control={<Checkbox {...getFieldProps('remember')} checked={values.remember} />}
            label="Remember me"
          />

          <Link component={RouterLink} variant="subtitle2" to="#">
            Forgot password?
          </Link>
        </Stack>

        <LoadingButton
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting}
        >
          Login
        </LoadingButton>
      </Form>
    </FormikProvider>
  );
}
