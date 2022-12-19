import React from 'react';
import './RecruiterRegister.css';
import { useFormik } from "formik"
import { signUpSchemaRec } from "../../../Schemas"
import axiosInstance from "../../../Axios/axiosPrivate"
import { useNavigate } from "react-router-dom"

const initialValues = {
  first_name: "",
  last_name: "",
  company_name:"",
  email: "",
  phone_number: "",
  password: "",
  confirm_password: "",
}
const RecruiterRegister = () => {
  const navigate = useNavigate()
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchemaRec,
      onSubmit: async (values, action) => {
        try {
          const response = await axiosInstance.post(`recruiter/register/`, {
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            company_name: values.company_name,
            phone_number: values.phone_number,
            password: values.password,
            confirm_password: values.confirm_password,
          })
          if (response.status === 200) {
            navigate("/recruiter/login")
          } else {
            alert("not valid credentials")
          }
        } catch (error) {
          alert(error)
          console.log(error)
        }
        action.resetForm()   
      },
    })
  return (
    <div>
      <div className="flex flex-col items-center  recruiter-register mx-6">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-xl mb-6">
            CREATE YOUR RECRUITER ACCOUNT
          </h1>
          <div className="mb-4">
            <input
              type="text"
              name="first_name"
              className="form-control block w-full py-3 px-3  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
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
              className="form-control block w-full py-3 px-3  text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
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
          <div className="mb-4">
            <input
              type="text"
              name="company_name"
              className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
              id="exampleFormControlInput3"
              placeholder="Company Name"
              value={values.company_name}
                onChange={handleChange}
                onBlur={handleBlur}
            />
            {errors.company_name && touched.company_name ? (
                <p className="form-error error-font">{errors.company_name}</p>
              ) : null}
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
              id="exampleFormControlInput4"
              placeholder="Company Email"
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

                className="form-control block w-full px-3 py-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
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
              className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
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
          <div className="mb-4">
            <input
              type="confirm_password"
              name="confirm_password"
              className="form-control block w-full px-3 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
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
          <div className="text-center pt-1 mb-12 pb-1">
            <button
              className="inline-block login-button  py-4 bg-black text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out  mb-3"
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
