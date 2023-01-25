import React from 'react'

import './AdminLogin.css';
import { logInSchema } from '../../../Schemas';
import { useFormik } from 'formik';
import axiosInstance from '../../../Axios/axiosPrivate'; 
import { useNavigate } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import { setToken,adminLogin} from '../../../Redux/Reducers/AuthSlice';
const initialValues = {
    email: '',
    password: '',
  };
const AdminLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
      useFormik({
        initialValues: initialValues,
        validationSchema: logInSchema,
        onSubmit: async (values, action) => {
          try {
            const response = await axiosInstance.post(`admin/login/`, {
              email: values.email,
              password: values.password,
            });
            if (response.status === 200 && response.data.is_superadmin) {
              dispatch(setToken(response.data))
              dispatch(adminLogin())
              navigate('/admin_dashboard');
            } else {
              alert('not valid credentials');
            }
            console.log(response.data);
          } catch {
            alert('something went wrong');
          }
          action.resetForm();
        },
      });
    return (
      <div>
        <div className="flex flex-col items-center  recruiter-login">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center font-bold text-xl mb-10 mx-28">
              ADMIN LOGIN
            </h1>
            <div className="mb-4  ">
              <input
                type="text"
                name="email"
                className="form-control block w-full py-3 px-3  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="Email Id"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className="form-error error-font">{errors.email}</p>
              ) : null}
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                id="exampleFormControlInput2"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error error-font">{errors.password}</p>
              ) : null}
            </div>
            <div className="text-center pt-1 mb-12 pb-1">
              <button
                type="submit"
                className="inline-block login-button px-28 py-4 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Log in
              </button>
              
            </div>
          </form>
  
          
        </div>
      </div>
    );
  };
export default AdminLogin