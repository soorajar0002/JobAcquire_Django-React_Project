import React from 'react';
import { useFormik } from 'formik';
import { useParams,useNavigate } from 'react-router-dom';
import axiosInstance from '../../Axios/axiosPrivate';


const initialValues = {
  otp: '',
  
};
const OTP = () => {
  const id = useParams();
  console.log(id)
  const navigate = useNavigate();
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
  
      onSubmit: async (values, action) => {
        console.log(values.otp)
        try {
          const response = await axiosInstance.post(`register/`, {
            otp:values.otp,
            id,
            verify:true,
            
          });
          
          if (response.status === 201 ) {
            
            
            navigate('/login');
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
    <div className="container mx-auto h-screen mb-28">
      <div className="grid  sm:grid-cols-7 justify-items-center gap-4">
        <div className="col-start-2 sm:col-start-3 col-span-4 sm:col-span-3 bg-gray-100 shadow-2xl mt-20 p-6 ">
          <h1 className="text-center text-3xl sm:text-3xl font-bold ">
            OTP VERIFICATION
          </h1>
          <p className="text-xs font-semibold text-center mt-2 text-gray-400">
            We have sent a code to your email{" "}
          </p>
          <p className="text-xs font-semibold text-center text-gray-400 ">
            xxxxxxxxxxx@gmail.com
          </p>
          <form onSubmit={handleSubmit}>
          <div className="">
            <label
              
              className="block mb-2 text-sm font-medium mt-6 text-gray-900 dark:text-white"
            ></label>
            <input
              type="text"
              id="default-input"
              name="otp"
              value={values.otp}
              onChange={handleChange}
              onBlur={handleBlur}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 mt-2"
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-white  mx-14  bg-gray-800 hover:bg-gray-900  font-medium rounded-lg text-xs px-3 py-2.5 mt-8  "
              >
                CONFIRM
              </button>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default OTP
