import React, { useState }  from 'react';
import Modal from '../../Modal/Modal';
import { Link } from 'react-router-dom';
import loginimg from '../../../Images/userlogin.png';
import './UserLogin.css';
import { logInSchema } from '../../../Schemas';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../../Axios/axiosPrivate';
import {useDispatch, useSelector} from 'react-redux';
import { setToken, userData } from '../../../Redux/Reducers/AuthSlice';

const initialValues = {
  email: '',
  password: '',
};

function UserLogin() {
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const [errorMessage, setErrorMessage] = useState("");
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: logInSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await axiosInstance.post(`user/login/`, {
            email: values.email,
            password: values.password,
          });
          if (response.status === 200 && response.data.is_seeker) {
            dispatch(userData(response.data))
            dispatch(setToken(response.data))
            
            navigate('/user_profile');
          } else {
            setErrorMessage("INCORRECT EMAIL OR PASSWORD");
          }
          
        } catch {
          setErrorMessage("INCORRECT EMAIL OR PASSWORD");
        }
        
        action.resetForm();
      },
    });

  return (
    <div>
	 {errorMessage && <Modal errorMessage={errorMessage} setErrorMessage={setErrorMessage} />}
      <div className=" px-6  h-full mx-6 recruiter-login">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center font-bold text-xl mb-10">
                Login to your account
              </h1>
              <div className="mb-4 ">
                <input
                  type="text"
                  name="email"
                  className="form-control block w-full py-2 px-3  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
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
              <div className="mb-4 ">
                <input
                  type="password"
                  name="password"
                  className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
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
                  className="inline-block login-button px-32  py-3 bg-black text-white font-medium text-sm leading-tight uppercase rounded shadow-md  hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3 hover:scale-105 duration-300 ease-in-out"
                  type="submit"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Login
                </button>
                <h1 className="text-center ">Forgot Password?</h1>
              </div>
            </form>

            <div className="text-center mt-4">
              <h1>Don't have an account?</h1>
              <Link to="/register">
                {' '}
                <button className=" btn-login mt-4  text-white py-3 px-24 font-medium text-xs hover:scale-105 duration-300 ease-in-out">
                  {' '}
                  CREATE ACCOUNT{' '}
                </button>
              </Link>
            </div>
          </div>
          <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0 justify-center text-center recruiter-login">
            <img src={loginimg} className="mx-auto hidden lg:block" alt="Phone" />
            <div>
              <Link to="/recruiter_login">
                {' '}
                <button
                  className="inline-block login-button rec-login-button py-3 px-28 btn-login text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-dark-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out mb-3 hover:scale-105 duration-300 ease-in-out"
                  type="button"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  RECRUITER LOGIN
                </button>{' '}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
