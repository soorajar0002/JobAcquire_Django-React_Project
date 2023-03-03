import React, { useEffect, useState } from "react"
import register_img from "../../../Images/register.png"
import { useFormik } from "formik"
import { signUpSchema } from "../../../Schemas"
import "./UserRegister.css"
import axiosInstance from "../../../Axios/axiosPrivate"
import Modal from '../../Modal/Modal';
import { useNavigate } from "react-router-dom"
const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  password: "",
  confirm_password: "",
  is_seeker:"",
}
const UserRegister = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("");

  
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await axiosInstance.post(`register/`, {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone_number: values.phone_number,
            password: values.password,
            confirm_password: values.confirm_password,
            is_seeker:true,
            verify:false,
          })
          if (response.status === 201) {
            
            navigate(`/otp/${response.data.id}`)
          } else {
            setErrorMessage('USER WITH THIS EMAIL ID ALREADY EXISTS !');
          }
        } catch (error) {
          setErrorMessage('USER WITH THIS EMAIL ID ALREADY EXISTS !');
          console.log(error)
        }
        action.resetForm()   
      },
    })

  return (
    <div>
{errorMessage && <Modal errorMessage={errorMessage} setErrorMessage={setErrorMessage} />}
      <div className="grid grid-cols-6">
	
        <div className="col-start-2 col-span-4 sm:col-start-2  sm:col-span-2">
          <form onSubmit={handleSubmit}>
            <h1 className="text-center font-bold text-xl mb-10">
              Create your account
            </h1>
            <div className="mb-4">
              <input
                type="text"
                name="first_name"
                className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                id="exampleFormControlInput1"
                placeholder="First Name"
                value={values.first_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.first_name && touched.first_name ? (
                <p className="form-error error-font">{errors.first_name}</p>
              ) : null}
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="last_name"
                className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                id="exampleFormControlInput11"
                placeholder="Last Name"
                value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.last_name && touched.last_name ? (
                <p className="form-error error-font">{errors.last_name}</p>
              ) : null}
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                id="exampleFormControlInput12"
                placeholder="Email"
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
                type="tel"
                name="phone_number"
                className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                id="exampleFormControlInput3"
                placeholder="Phone Number"
                value={values.phone_number}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.phone_number && touched.phone_number ? (
                <p className="form-error error-font">{errors.phone_number}</p>
              ) : null}
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="password"
                className="form-control block w-full px-3 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                id="exampleFormControlInput4"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p className="form-error error-font ">{errors.password}</p>
              ) : null}
            </div>
            <div className="mb-4">
              <input
                type="password"
                name="confirm_password"
                className="form-control block w-full px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                id="exampleFormControlInput5"
                placeholder="Confirm Password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p className="form-error error-font">
                  {errors.confirm_password}
                </p>
              ) : null}
            </div>
            <p className="text-xs">
              By creating an account or logging in, you understand and agree to
              JobAcquire’ s Terms.
            </p>
            <div className="text-center pt-1 mb-12 pb-1 mt-4">
              <button
                className="inline-block login-button  py-3 px-28 sm:px-36 bg-black text-white font-medium text-10xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3 hover:scale-105 duration-300 ease-in-out"
                type="submit"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                CREATE
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-3 ml-6 mt-10 hidden lg:block">
          <img className="reg-pic mx-auto mb-20" src={register_img} alt="register" />
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default UserRegister
