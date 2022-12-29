import React from 'react';
import { Link } from 'react-router-dom';
import './RecruiterLogin.css';
import { logInSchema } from '../../../Schemas';
import { useFormik } from 'formik';
import axiosInstance from '../../../Axios/axiosPrivate'; 
import {useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { recLogin,setToken} from '../../../Redux/Reducers/AuthSlice';
const initialValues = {
  email: '',
  password: '',
};
const RecruiterLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: logInSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await axiosInstance.post(`recruiter/login/`, {
            email: values.email,
            password: values.password,
          });
          if (response.status === 200 && response.data.is_recruiter) {
            
            dispatch(recLogin(response.data))
            dispatch(setToken(response.data))
            navigate('/recruiter_profile');
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
      <div className="flex flex-col items-center  recruiter-login ">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-xl mb-10 mx-24">
            RECRUITER LOGIN
          </h1>
          <div className="mb-4">
            <input
              type="text"
              name="email"
              className="form-control block w-full py-3  px-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
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
              className="form-control block w-full  py-3 px-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
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
              className="inline-block px-20 py-4 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3 hover:scale-105 duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              Log in
            </button>
            <h1 className="text-center ">Forgot Password?</h1>
          </div>
        </form>

        <div className="text-center mt-4">
          <h1>Don't have an account?</h1>
          <Link to="/recruiter_register">
            {' '}
            <button className=" btn-login mt-4  text-white py-4 px-20  font-medium text-xs hover:scale-105 duration-300 ease-in-out ho">
              {' '}
              CREATE ACCOUNT{' '}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecruiterLogin;
