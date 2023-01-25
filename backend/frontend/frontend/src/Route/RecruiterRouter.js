import { Outlet,Navigate } from "react-router-dom";
import React from 'react'
import {useSelector} from 'react-redux';

const RecruiterRouter = () => {
  let {user} = useSelector((state)=>state.user)
  
  return (
    user.isRecLoggedIn ?<Outlet/> :  <Navigate to="/recruiter_login"/>
  )
}

export default RecruiterRouter