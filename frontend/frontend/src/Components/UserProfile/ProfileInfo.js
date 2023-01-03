import React from "react"
import { useFormik } from "formik"
import useAxios from "../../Axios/useAxios"
import { useNavigate } from "react-router-dom"
import { UserProfUpdateSchema } from "../../Schemas"
import { useSelector, useDispatch } from "react-redux"
import { recProfileData } from "../../Redux/Reducers/AuthSlice"
const ProfileInfo = () => {
  const usersprof = useSelector((state) => state.user.profile)
  const imageInput = document.querySelector("#imageInput")

  const initialValues = {
    title: usersprof.title,
    bio: usersprof.bio,
    skill: usersprof.skill,
    desired_job: usersprof.desired_job,
    desired_location: usersprof.desired_location,
    degree: usersprof.degree,
    college: usersprof.college,

    joining_year: usersprof.joining_year,
    passout_year: usersprof.passout_year,
    designation: usersprof.designation,
    company: usersprof.company,
    start: usersprof.start,
    end: usersprof.end,
    description: usersprof.description,
    percentage: usersprof.percentage,
  }
  console.log(usersprof.profile_picture)
  const api = useAxios()
  const dispatch = useDispatch()
  const id = useSelector((state) => state.user.user.id)
  const navigate = useNavigate()
  const updateProfile = async () => {
    let image = imageInput.files[0]
    console.log(image)
    const formData = new FormData()

    formData.append("profile_picture", image)
    formData.append("id", id)
    console.log(formData)
    const Res = await api.patch(`user/profile/`, formData)
    if (Res.status === 201) {
      console.log("block 3")
    }
  }
  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: UserProfUpdateSchema,

    onSubmit: async (values, action) => {
      try {
        const response = await api.put(`user/profile/`, {
          id: id,
          title: values.title,
          bio: values.bio,
          skill: values.skill,
          desired_job: values.desired_job,
          desired_location: values.desired_location,
          degree: values.degree,
          college: values.college,
          joining_year: values.joining_year,
          passout_year: values.passout_year,
          designation: values.designation,
          company: values.company,
          start: values.start,
          end: values.end,
          description: values.description,
          percentage: values.percentage,
          is_account: false,
        })
        if (response.status === 201) {
          dispatch(recProfileData(response.data))
          navigate("/user_profile")
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
            Job Title
          </label>
          <input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.title && touched.title ? (
            <p className="form-error error-font">{errors.title}</p>
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
            name="bio"
            value={values.bio}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.bio && touched.bio ? (
            <p className="form-error error-font">{errors.bio}</p>
          ) : null}
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Profile Image
          </label>
          <input
            type="file"
            name="profile_picture"
            accept="image/*"
            multiple={false}
            value={values.profile_picture}
            onChange={updateProfile}
            onBlur={handleBlur}
            id="imageInput"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Skill
          </label>
          <input
            type="text"
            name="skill"
            value={values.skill}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.skill && touched.skill ? (
            <p className="form-error error-font">{errors.skill}</p>
          ) : null}
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Desired Job
          </label>
          <input
            type="text"
            name="desired_job"
            value={values.desired_job}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.desired_job && touched.desired_job ? (
            <p className="form-error error-font">{errors.desired_job}</p>
          ) : null}
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Desired Location
          </label>
          <input
            type="text"
            name="desired_location"
            value={values.desired_location}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.desired_location && touched.desired_location ? (
            <p className="form-error error-font">{errors.desired_location}</p>
          ) : null}
        </div>
        <h1 className="font-bold text-xl my-4">EDUCATION QUALIFICATION</h1>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Qualification
          </label>
          <input
            type="text"
            name="degree"
            value={values.degree}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.degree && touched.degree ? (
            <p className="form-error error-font">{errors.degree}</p>
          ) : null}
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            College
          </label>
          <input
            type="text"
            name="college"
            value={values.college}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.college && touched.college ? (
            <p className="form-error error-font">{errors.college}</p>
          ) : null}
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Joining Year
          </label>
          <input
            type="text"
            name="joining_year"
            value={values.joining_year}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.joining_year && touched.joining_year ? (
            <p className="form-error error-font">{errors.joining_year}</p>
          ) : null}
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Passout Year
          </label>
          <input
            type="text"
            name="passout_year"
            value={values.passout_year}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.passout_year && touched.passout_year ? (
            <p className="form-error error-font">{errors.passout_year}</p>
          ) : null}
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Percentage
          </label>
          <input
            type="text"
            name="percentage"
            value={values.percentage}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.percentage && touched.percentage ? (
            <p className="form-error error-font">{errors.percentage}</p>
          ) : null}
        </div>
        <h1 className="font-bold text-xl my-4">WORK EXPERIENCE</h1>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Designation
          </label>
          <input
            type="text"
            name="designation"
            value={values.designation}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.designation && touched.designation ? (
            <p className="form-error error-font">{errors.designation}</p>
          ) : null}
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Company
          </label>
          <input
            type="text"
            name="company"
            value={values.company}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.company && touched.company ? (
            <p className="form-error error-font">{errors.company}</p>
          ) : null}
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Start
          </label>
          <input
            type="text"
            name="start"
            value={values.start}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.start && touched.start ? (
            <p className="form-error error-font">{errors.start}</p>
          ) : null}
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            End
          </label>
          <input
            type="text"
            name="end"
            value={values.end}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.end && touched.end ? (
            <p className="form-error error-font">{errors.end}</p>
          ) : null}
        </div>
        <div>
          <label
            for="small-input"
            className="block mb-2 text-sm font-medium text-black dark:text-black"
          >
            Description
          </label>
          <input
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            id="small-input"
            className="block w-full p-2 text-gray-900 border border-gray-300  bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500  dark:text-black "
          />
          {errors.description && touched.description ? (
            <p className="form-error error-font">{errors.description}</p>
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
