import React, { useState }  from 'react';
import './RecruiterRegister.css';
import { useFormik } from "formik"
import { signUpSchemaRec } from "../../../Schemas"
import axiosInstance from "../../../Axios/axiosPrivate"
import { useNavigate } from "react-router-dom"
import Modal from '../../Modal/Modal';
const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  password: "",
  confirm_password: "",
  is_seeker:"",
}
const RecruiterRegister = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("");
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchemaRec,
      onSubmit: async (values, action) => {
        try {
          const response = await axiosInstance.post(`register/`, {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone_number: values.phone_number,
            password: values.password,
            confirm_password: values.confirm_password,
            is_seeker:false,
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
    <div className='container mx-auto '>
      {errorMessage && <Modal errorMessage={errorMessage} setErrorMessage={setErrorMessage} />}
      <div className="flex flex-col items-center  recruiter-register ">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-xl mb-6">
            CREATE YOUR RECRUITER ACCOUNT
          </h1>
          <div className="mb-4 ">
            <input
              type="text"
              name="first_name"
              className="form-control block w-full py-2 px-3  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
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
          <div className="mb-4 ">
            <input
              type="text"
              name="last_name"
              className="form-control block w-full py-2 px-3  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
              id="exampleFormControlInput2"
              placeholder="Last Name"
              value={values.last_name}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.last_name && touched.last_name ? (
                <p className="form-error error-font">{errors.last_name}</p>
              ) : null}
          </div>
         
          <div className="mb-4 ">
            <input
              type="email"
              name="email"
              className="form-control block w-full px-2 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
              id="exampleFormControlInput4"
              placeholder=" Email"
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
                type="tel"
                name="phone_number"

                className="form-control block w-full px-2 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
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
          <div className="mb-4 ">
            <input
              type="password"
              name="password"
              className="form-control block w-full px-2 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
              id="exampleFormControlInput5"
              placeholder="Password"
              value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
                <p className="form-error error-font">{errors.password}</p>
              ) : null}
          </div>
          <div className="mb-4 ">
            <input
              type="password"
              name="confirm_password"
              className="form-control block w-full px-2 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
              id="exampleFormControlInput6"
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
          <div className="text-center pt-1 mb-12 pb-1  ">
            <button
              className="inline-block px-20 py-3 bg-black text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  "
              type="submit"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
            >
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecruiterRegister;
