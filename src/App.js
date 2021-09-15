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
// ----------------------------------------------------------------------

export default function App() {
  return (
    <ThemeConfig>
    <ScrollToTop />
           <Routes>
      <Route  path= '/dashboard' element={ <DashboardLayout />}>
      <Route   element={<Navigate to="app" />} />

           <Route path="app" element={<DashboardApp />} />
       
          <Route path="user" element={<User />} />
          <Route path="products" element={<Products />} />
          <Route path="blog" element={<Blog />} />

     </Route>
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
