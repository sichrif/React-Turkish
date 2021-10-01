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
const DashboardLayout = React.lazy(() => import('./layouts/dashboard'));
import ScrollToTop from './components/ScrollToTop';
import Location from './components/Locations/Location';
// theme
import ThemeConfig from './theme';
// components 
//const Home = React.lazy(() => import('./Home'));
import Home from './Home';
const Payofficial = React.lazy(() => import('./components/payment/Payofficial'));
import NotFound from './pages/Page404';
import User from './pages/User';
import Blog from './pages/Blog';
import Products from './pages/Products';
import Register from './pages/Register';
import Login from './pages/Login';
//const Location = React.lazy(() => import('./components/Locations/Location'));
const GiftCard = React.lazy(() => import('./components/GiftCard/GiftCard'));

import DashboardApp from './pages/DashboardApp'; 
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
            <Suspense fallback={<div style={{background:"#faa"}}>
              <img style={{margin:"auto",position:"fixed",top:"0",bottom:"0",left:"0",right:"0"}} src="./images/loading.gif" alt="loading" />
            </div>}>
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
          <Route path="giftcard" element={<GiftCard />} />

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
