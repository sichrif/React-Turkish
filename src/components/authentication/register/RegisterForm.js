import * as Yup from 'yup'; 
import { useFormik,  } from 'formik'; 
import { useNavigate } from 'react-router-dom';
// material
 
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { register  } from "../../../actions/auth";
import Payofficial from '../../payment/Payofficial';
//import CardInput from 'CardInput';

// ----------------------------------------------------------------------

export default function RegisterForm() {
  const navigate = useNavigate(); 
  const { isLoggedIn } = useSelector(state => state.auth);
   
  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <Payofficial/>
  );
}
