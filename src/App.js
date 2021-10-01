// routes
//import Router from './routes';
import {
  BrowserRouter,
  Switch,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import React,{ useEffect,Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

// theme
import ThemeConfig from './theme';
// components 
//const Home = React.lazy(() => import('./Home'));
import Home from './Home';
const Payofficial = React.lazy(() => import('./components/payment/Payofficial'));
const NotFound = React.lazy(() => import('./pages/Page404'));
const User = React.lazy(() => import('./pages/User'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Products = React.lazy(() => import('./pages/Products'));
const Register = React.lazy(() => import('./pages/Register'));
const Login = React.lazy(() => import('./pages/Login'));
const DashboardLayout = React.lazy(() => import('./layouts/dashboard'));
const Location = React.lazy(() => import('./components/Locations/Location'));
const ScrollToTop = React.lazy(() => import('./components/ScrollToTop'));
const DashboardApp = React.lazy(() => import('./pages/DashboardApp'));
 
// ----------------------------------------------------------------------
 

export default function App() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const { isLoggedIn } = useSelector(state => state.auth);

  useEffect(() => {
    console.log(location.pathname);

    if(!isLoggedIn && location.pathname != '/' &&location.pathname != '/register' && location.pathname != '/404'){
      navigate('/login', { replace: true })

    }
  }, []);
 

  return (
    <ThemeConfig>
            <Suspense fallback={<div>Chargement...</div>}>
    <ScrollToTop />
           <Routes>
      <Route  path= '/' element={ <Home />}/>
      <Route   path= '/payment' element={ <Payofficial/>}/>
      <Route  path= '/dashboard' element={ <DashboardLayout />}>
      <Route   element={<Navigate to="app" />} />

           <Route path="app" element={<DashboardApp />} />
       
          <Route path="user" element={<User />} />
          <Route path="location" element={<Location />} />
          <Route path="products" element={<Products />} />
          <Route path="blog" element={<Blog />} />

     </Route>
     </Routes>
     <Routes>
            <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="404" element={<NotFound />} />
          {/* <Route path="*" element={<NotFound />} />
        
     
      <Route path="*"   element={<Navigate to="404" />} /> */}
 
     </Routes>
     </Suspense>
    </ThemeConfig>
  );
}
