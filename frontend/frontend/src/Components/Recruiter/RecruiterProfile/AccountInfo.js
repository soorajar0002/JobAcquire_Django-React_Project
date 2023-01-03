import React from "react"
import { useFormik } from "formik"
import useAxios from "../../../Axios/useAxios"
import { useNavigate } from "react-router-dom"
import { RecUpdateSchema } from "../../../Schemas"
import {useSelector,useDispatch} from 'react-redux';
import { recLogin} from '../../../Redux/Reducers/AuthSlice';

const AccountInfo = () => {
  const users = useSelector((state)=>state.user.user)
  
  const initialValues = {
    first_name: users.firstname,
    last_name: users.lastname,
    email: users.email,
    phone_number: users.phone_number,
  }
  
  const api = useAxios()
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.user.id);
 
  const navigate = useNavigate()
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RecUpdateSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await api.put(`recruiter/profile/`, {
            id:id,
            first_name: values.first_name,
            last_name: values.last_name,
            email: values.email,
            phone_number: values.phone_number,
            is_account:true,
          })
          if (response.status === 201) {
            dispatch(recLogin(response.data))
            navigate("/recruiter_profile")
            
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
        <form onSubmit={handleSubmit}>
      <div>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-black dark:text-black"
        >
          First Name
        </label>
        <input
          type="text"
          name="first_name"
          id="small-input"
          value={values.first_name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.first_name && touched.first_name ? (
                <p className="form-error error-font">{errors.first_name}</p>
              ) : null}
      </div>
      <div>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-black dark:text-black"
        >
          Last Name
        </label>
        <input
          type="text"
          name="last_name"
          value={values.last_name}
        onChange={handleChange}
        onBlur={handleBlur}
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.last_name && touched.last_name ? (
                <p className="form-error error-font">{errors.last_name}</p>
              ) : null}
      </div>
      <div>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-black dark:text-black"
        >
          Email
        </label>
        <input
          type="text"
          name="email"
          value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.email && touched.email ? (
                <p className="form-error error-font">{errors.email}</p>
              ) : null}
      </div>
      <div>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-black dark:text-black"
        >
          Phone Number
        </label>
        <input
          type="text"
          name="phone_number"
          value={values.phone_number}
            onChange={handleChange}
            onBlur={handleBlur}
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.phone_number && touched.phone_number ? (
                <p className="form-error error-font">{errors.phone_number}</p>
              ) : null}
      </div>

      <button
         type="submit"
        className=" mt-2 text-gray-900 bg-white border border-gray-300  hover:bg-gray-100  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        Save
      </button>
      </form>
    </div>
  )
}

export default AccountInfo
