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
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom'

// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
import Location from './components/Locations/Location';
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
 import Login from './pages/Login';
import Register from './pages/Register';
import DashboardApp from './pages/DashboardApp';
import Products from './pages/Products';
import Blog from './pages/Blog';
import User from './pages/User';
import NotFound from './pages/Page404';
import Payofficial from './components/payment/Payofficial';
import Home from './Home';
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
    </ThemeConfig>
  );
}
