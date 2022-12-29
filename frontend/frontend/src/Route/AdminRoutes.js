import { Outlet,Navigate } from "react-router-dom";
import React from 'react'
import {useSelector} from 'react-redux';

const AdminRoutes = () => {
  let {user} = useSelector((state)=>state.user)
  
  return (
    user.isAdmLoggedIn ?<Outlet/> :  <Navigate to="/admin_login"/>
  )
}

export default AdminRoutes