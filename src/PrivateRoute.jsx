import React, { useEffect, useState , useCallback} from 'react';
import { Route, Navigate } from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
///////

import { logout } from "./actions/auth";
import { clearMessage } from "./actions/message";

import { history } from "./helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
/////

const PrivateRoute = ({ component: Component, ...rest }) => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
  
    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
 
    useEffect(() => {

      history.listen((location) => {
        dispatch(clearMessage()); // clear message when changing location
      });
    }, [dispatch]);
  
    const logOut = useCallback(() => {
      dispatch(logout());
    }, [dispatch]);
  
    useEffect(() => {
      if (currentUser) {
        setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
        setShowAdminBoard(currentUser.isAdmin==true);
      } else {
        setShowModeratorBoard(false);
        setShowAdminBoard(false);
      }
  
      EventBus.on("logout", () => {
        logOut();
      });
  
      return () => {
        EventBus.remove("logout");
      };
    }, [currentUser, logOut]);
  
  const auth = useSelector(state => state.auth)
  const [isAuthenticated, setIsAuthenticated] = useState(null)  
  useEffect(() => {
    let token = localStorage.getItem('token')
        if(token){
            let tokenExpiration = jwtDecode(token).exp;
            let dateNow = new Date();

            if(tokenExpiration < dateNow.getTime()/1000){
                setIsAuthenticated(false)
            }else{
                setIsAuthenticated(true)
            }
        } else {
           setIsAuthenticated(false)
        }
    // eslint-disable-next-line
  }, [auth])

  if(isAuthenticated === null){
    return <></>
  }

  return (
    <Route {...rest} render={props =>
      !showAdminBoard ? (
        <Navigate to="login" replace='true' />
      ) : (
        <Component {...props} />
      )
    }
    />
  );
};

export default PrivateRoute;