import React from "react"
import { useFormik } from "formik"
import useAxios from "../../Axios/useAxios"
import { useNavigate } from "react-router-dom"
import {useSelector} from 'react-redux';
import { RecProfileUpdateSchema } from "../../Schemas"
const ProfileInfo = () => {
  const recProfile = useSelector((state)=>state.user.profile)
  const initialValues = {
    company_address_line1:recProfile.company_address_line1, 
    company_address_line2:recProfile.company_address_line2,
    company_email: recProfile.company_email,
    company_mobile: recProfile.company_mobile,
    company_name: recProfile.company_name,
    company_website:recProfile.company_website,
    description:recProfile.description,
    location:recProfile.location,
    position:recProfile.position,
    recruiter_bio:recProfile.recruiter_bio,
  }
  const api = useAxios()
  const id = useSelector((state) => state.user.user.id);
 
  const navigate = useNavigate()
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: RecProfileUpdateSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await api.put(`recruiter/profile/`, {
            id:id,
            company_address_line1:values.company_address_line1, 
            company_address_line2:values.company_address_line2,
            company_email: values.company_email,
            company_mobile: values.company_mobile,
            company_name: values.company_name,
            company_website:values.company_website,
            description:values.description,
            location:values.location,
            position:values.position,
            recruiter_bio:values.recruiter_bio,
            is_account:false,
          })
          if (response.status === 201) {
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
          Company Name
        </label>
        <input
          type="text"
          id="small-input"
          name="company_name"
          value={values.company_name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.company_name && touched.company_name ? (
                <p className="form-error error-font">{errors.company_name}</p>
              ) : null}
      </div>
      <div>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-black dark:text-black"
        >
          Position
        </label>
        <input
          type="text"
          id="small-input"
          name="position"
          value={values.position}
          onChange={handleChange}
          onBlur={handleBlur}
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.position && touched.position ? (
                <p className="form-error error-font">{errors.position}</p>
              ) : null}
      </div>
      <div>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-black dark:text-black"
        >
          Bio
        </label>
        <input
          type="text"
          id="small-input"
          name="recruiter_bio"
          value={values.recruiter_bio}
          onChange={handleChange}
          onBlur={handleBlur}
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.recruiter_bio && touched.recruiter_bio ? (
                <p className="form-error error-font">{errors.recruiter_bio}</p>
              ) : null}
      </div>
      <div>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-black dark:text-black"
        >
          Location
        </label>
        <input
          type="text"
          id="small-input"
          name="location"
          value={values.location}
          onChange={handleChange}
          onBlur={handleBlur}
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.location && touched.location ? (
                <p className="form-error error-font">{errors.location}</p>
              ) : null}
      </div>
      <div>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-black dark:text-black"
        >
          Company Email
        </label>
        <input
          type="text"
          id="small-input"
          name="company_email"
          value={values.company_email}
          onChange={handleChange}
          onBlur={handleBlur}
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.company_email && touched.company_email ? (
                <p className="form-error error-font">{errors.company_email}</p>
              ) : null}
      </div>
      <div>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-black dark:text-black"
        >
          Company Phone No
        </label>
        <input
          type="text"
          id="small-input"
          name="company_mobile"
          value={values.company_mobile}
          onChange={handleChange}
          onBlur={handleBlur}
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.company_mobile && touched.company_mobile ? (
                <p className="form-error error-font">{errors.company_mobile}</p>
              ) : null}
      </div>
      <div>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-black dark:text-black"
        >
          Company Website
        </label>
        <input
          type="text"
          id="small-input"
          name="company_website"
          value={values.company_website}
          onChange={handleChange}
          onBlur={handleBlur}
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.company_website && touched.company_website ? (
                <p className="form-error error-font">{errors.company_website}</p>
              ) : null}
      </div>
      <div>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-black dark:text-black"
        >
          Company Description
        </label>
        <input
          type="text"
          id="small-input"
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.description && touched.description ? (
                <p className="form-error error-font">{errors.description}</p>
              ) : null}
      </div>
      <div>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-black dark:text-black"
        >
          Address Line 1
        </label>
        <input
          type="text"
          id="small-input"
          name="company_address_line1"
          value={values.company_address_line1}
          onChange={handleChange}
          onBlur={handleBlur}
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.company_address_line1 && touched.company_address_line1 ? (
                <p className="form-error error-font">{errors.company_address_line1}</p>
              ) : null}
      </div>
      <div>
        <label
          for="small-input"
          className="block mb-2 text-sm font-medium text-black dark:text-black"
        >
          Address Line 2
        </label>
        <input
          type="text"
          id="small-input"
          name="company_address_line2"
          value={values.company_address_line2}
          onChange={handleChange}
          onBlur={handleBlur}
          className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
        />
        {errors.company_address_line2 && touched.company_address_line2 ? (
                <p className="form-error error-font">{errors.company_address_line2}</p>
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

export default ProfileInfo
