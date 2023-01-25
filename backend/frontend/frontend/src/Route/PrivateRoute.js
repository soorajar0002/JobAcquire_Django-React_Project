import { Outlet,Navigate } from "react-router-dom";
import React from 'react'
import {useSelector} from 'react-redux';

const PrivateRoute = () => {
  let {user} = useSelector((state)=>state.user)
  
  return (
    user.isLoggedIn ?<Outlet/> :  <Navigate to="/login"/>
  )
}

export default PrivateRoute