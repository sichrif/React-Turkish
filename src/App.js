// routes
//import Router from './routes';
import {
  BrowserRouter,
  Switch,
  Route,
  Navigate,
  Routes
} from 'react-router-dom';
// theme
import ThemeConfig from './theme';
// components
import ScrollToTop from './components/ScrollToTop';
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
import PrivateRoute from './PrivateRoute'
import jwtDecode from 'jwt-decode';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
    <ScrollToTop />
           <Routes>
      <PrivateRoute  path= '/dashboard' element={ <DashboardLayout />}>
      <PrivateRoute   element={<Navigate to="app" />} />

           <PrivateRoute path="app" element={<DashboardApp />} />
       
          <PrivateRoute path="user" element={<User />} />
          <PrivateRoute path="products" element={<Products />} />
          <PrivateRoute path="blog" element={<Blog />} />

     </PrivateRoute>
     </Routes>
     <Routes>
      <Route  path= '/' element={ <LogoOnlyLayout />}>
           <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        
     </Route>
      <Route path="*"   element={<Navigate to="404" />} />
 
     </Routes>
    </ThemeConfig>
  );
}
