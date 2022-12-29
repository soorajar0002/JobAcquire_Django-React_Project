import React from "react"
import { useFormik } from "formik"
import axiosInstance from "../../Axios/axiosPrivate"
import { useNavigate } from "react-router-dom"
import {useSelector} from 'react-redux';
import { UserProfileEditSchema } from "../../Schemas"
const initialValues = {
  title: "",
  bio: "",
  skill:"",
  first_name:"",
  last_name:"",
  email: "",
  phone_number: "",
  desired_job:"",
  desired_location:"",
  designation:"",
  company:"",
  joining_year:"",
  passout_year:"",
  start:"",
  end:"",
  degree:"",
  college:"",
  percentage:"",
}
const UserProfileEdit = () => {
  const navigate = useNavigate()
  const id = useSelector((state) => state.user.user.id);

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: UserProfileEditSchema,
      onSubmit: async (values, action) => {
        try {
          const response = await axiosInstance.put(`/user/profile/`, {
            id:id,
            title: values.title,
            bio: values.bio,
            skill:values.skill,
            first_name:values.first_name,
            last_name:values.last_name,
            email: values.email,
            phone_number: values.phone_number,
            desired_job:values.desired_job,
            desired_location:values.desired_location,
            designation:values.designation,
            company:values.company,
            joining_year:values.joining_year,
            passout_year:values.passout_year,
            start:values.start,
            end:values.end,
            degree:values.degree,
            college:values.college,
            percentage:values.percentage,
          })
          console.log(response.data)
          if (response.status === 201) {
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
    
    <div className="container mx-auto ">
      <div className=" ">
        <form onSubmit={handleSubmit}>
        <h1 className="text-3xl font-extrabold ml-6  ">PROFILE</h1>
        <div className="grid gap-6 lg:grid-cols-3    mx-4 mt-5  ">
          <div className="p-4 text-center shadow-2xl mb-6 ">
            <img
              class="w-20 h-20 rounded-full border mx-auto mt- "
              src=""
              alt=""
            ></img>
           <div class="flex  items-center justify-center bg-grey-lighter">
    <label class=" mt-2 flex flex-col items-center  p-2 bg-white text-blue rounded-lg  tracking-wide uppercase   cursor-pointer hover:bg-red ">
        <svg class="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
        
        <input type='file' class="hidden" />
    </label>
</div>
            
            
            <div className=" p-4 my-2 mt-20 ">
           
                
            <div class="mb-6 text-left">
                Title
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="title"
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                  />
                  {errors.title && touched.title ? (
                <p className="form-error error-font">{errors.title}</p>
              ) : null}
                </div>
                <div class="mb-6 text-left">
                Bio
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-10 dark:bg-gray-50 "
                    name="bio"
                    value={values.bio}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.bio && touched.bio ? (
                <p className="form-error error-font">{errors.bio}</p>
              ) : null}
                </div>
                
                

            
           
              <h1 className="font-extrabold text-2xl  text-left ">SKILLS</h1>
              <div className="mt-6 font-medium mx-">
              <div class="mb-6 text-left">
                Skill
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                    name="skill"
                    value={values.skill}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.skill && touched.skill ? (
                <p className="form-error error-font">{errors.skill}</p>
              ) : null}
                </div>
              </div>
            </div>
            <button type="submit" class=" px-20 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">SAVE</button>
          </div>
          <div className="lg:col-span-2  p-4   ">
            <div className="shadow-2xl p-4 my-2">
              <h1 className="font-extrabold text-2xl mx-6">BASIC INFO</h1>
              <div className="mt-6 font-medium mx-6">
                <div class="mb-6">
                    First Name
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="first_name"
                    value={values.first_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                  />
                  {errors.first_name && touched.first_name? (
                <p className="form-error error-font">{errors.first_name}</p>
              ) : null}
                </div>
                <div class="mb-6">
                    Last Name
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="last_name"
                    value={values.last_name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                  />
                  {errors.last_name && touched.last_name ? (
                <p className="form-error error-font">{errors.last_name}</p>
              ) : null}
                </div>
                <div class="mb-6">
                    Email
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    id="base-input"
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                  />
                  {errors.email && touched.email? (
                <p className="form-error error-font">{errors.email}</p>
              ) : null}
                </div>
                <div class="mb-6">
                    Phone
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="phone_number"
                    value={values.phone_number}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50  "
                  />
                  {errors.phone_number && touched.phone_number ? (
                <p className="form-error error-font">{errors.phone_number}</p>
              ) : null}
                </div>
                <div class="mb-6">
                    Desired Job
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="desired_job"
                    value={values.desired_job}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50  "
                  />
                  {errors.desired_job && touched.desired_job ? (
                <p className="form-error error-font">{errors.desired_job}</p>
              ) : null}
                </div>
                <div class="mb-6">
                    Desired Job Location
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="desired_location"
                    value={values.desired_location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50  "
                  />
                  {errors.desired_location && touched.desired_location ? (
                <p className="form-error error-font">{errors.desired_location}</p>
              ) : null}
                </div>
              </div>
            </div>
            <div className="shadow-2xl p-4 my-2">
              <h1 className="font-extrabold text-2xl mx-6">EXPERIENCE</h1>
              <div className="mt-6 font-medium mx-6">
              <div class="mb-6">
              Designation
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="designation"
                    value={values.designation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                  />
                  {errors.designation && touched.designation? (
                <p className="form-error error-font">{errors.designation}</p>
              ) : null}
                </div>
                <div class="mb-6">
                Company
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="company"
                    value={values.company}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                  />
                  {errors.company && touched.company ? (
                <p className="form-error error-font">{errors.company}</p>
              ) : null}
                </div>
                <div class="mb-6">
                From
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="joining_year"
                    value={values.joining_year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                  />
                  {errors.joining_year && touched.joining_year ? (
                <p className="form-error error-font">{errors.joining_year}</p>
              ) : null}
                </div>
                <div class="mb-6">
                To
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="passout_year"
                    value={values.passout_year}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                  />
                  {errors.passout_year && touched.passout_year ? (
                <p className="form-error error-font">{errors.passout_year}</p>
              ) : null}
                </div>
              </div>
            </div>
            <div className="shadow-2xl p-4 my-2">
              <h1 className="font-extrabold text-2xl mx-6">QUALIFICATION</h1>
              <div className="mt-6 font-medium mx-6">
              <div class="mb-6">
              Degree
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="degree"
                    value={values.degree}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                  />
                  {errors.degree&& touched.degree ? (
                <p className="form-error error-font">{errors.degree}</p>
              ) : null}
                </div>
                <div class="mb-6">
                College
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="college"
                    value={values.college}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                  />
                  {errors.college && touched.college ? (
                <p className="form-error error-font">{errors.college}</p>
              ) : null}
                </div>
                <div class="mb-6">
                From
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="start"
                    value={values.start}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                  />
                  {errors.start && touched.start ? (
                <p className="form-error error-font">{errors.start}</p>
              ) : null}
                </div>
                <div class="mb-6">
                To
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="end"
                    value={values.end}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                  />
                  {errors.end && touched.end ? (
                <p className="form-error error-font">{errors.end}</p>
              ) : null}
                </div>
                <div class="mb-6">
                Percentage
                  <label
                    for="base-input"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    
                  </label>
                  <input
                    type="text"
                    id="base-input"
                    name="percentage"
                    value={values.percentage}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-50 "
                  />
                  {errors.percentage && touched.percentage ? (
                <p className="form-error error-font">{errors.percentage}</p>
              ) : null}
                </div>
              </div>
            
            </div>
          </div>
          
        </div>
        </form>
      </div>
    </div>
  )
}

export default UserProfileEdit
