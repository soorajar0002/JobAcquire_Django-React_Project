import { useFormik } from "formik"
import React from "react"
import { useNavigate } from "react-router-dom"
import useAxios from "../../../Axios/useAxios"
import { useSelector } from "react-redux"
const RecruiterJobAdd = () => {
  const id = useSelector((state) => state.user.user.id)

  console.log(id)

  const initialValues = {
    category: "",
    designation: "",
    criteria: "",
    experience_from: "",
    experience_to: "",
    location: "",
    job_description: "",
    type: "",
    vacancies: "",
    workmode: "",
    payscale_from: "",
    payscale_to: "",
  }

  const api = useAxios()

  const navigate = useNavigate()
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      enableReinitialize: true,

      onSubmit: async (values, action) => {
        try {
          const response = await api.post(`/recruiter/job/post`, {
            id: id,
            company: id,
            category: values.category,
            designation: values.designation,
            criteria: values.criteria,
            experience_from: values.experience_from,
            experience_to: values.experience_to,
            location: values.location,
            job_description: values.job_description,
            type: values.type,
            vacancies: values.vacancies,
            workmode: values.workmode,
            payscale_from: values.payscale_from,
            payscale_to: values.payscale_to,
          })

          if (response.status === 201) {
            navigate("/recruiter_job_list")
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
      <div className="grid grid-cols-10 gap-4 mb-20">
        <div className="col-start-2 col-span-8 ">
          <h1 className="text-black font-bold text-xl md:text-3xl  mb-2">
            ADD POST
          </h1>

          <div className=" p-4">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Category
                  </label>
                  <select
                    
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class="border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                  >
                    <option selected className="text-gray-900">Choose Type</option>
                    <option value="Development & IT">Development & IT</option>
                    <option value="Design & Creative">Design & Creative</option>
                    <option value="Sales & Marketing">Sales & Marketing</option>
                    <option value="Finance & Accounting">Finance & Accounting</option>
                    <option value="Writing & Translation">Writing & Translation</option>
                  </select>
                  {/* <input
                    type="text"
                    id="first_name"
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                    placeholder="Job Category"
                    required
                  /> */}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Designation
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="designation"
                    value={values.designation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                    placeholder="Designation"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Vacancies
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="vacancies"
                    value={values.vacancies}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                    placeholder="Total Vacancies"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Location
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    value={values.location}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="location"
                    className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                    placeholder="Job Location"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Type
                  </label>

                  <select
                    id="countries"
                    name="type"
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class="border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                  >
                    <option selected className="text-gray-900">Choose Type</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Full Time">Full Time</option>
                  </select>

                  {/* <input
                    type="text"
                    id="first_name"
                    value={values.type}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="type"
                    className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                    placeholder="Part Time / Full Time"
                    required
                  /> */}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Work Mode
                  </label>
                  <select
                    
                    name="workmode"
                    value={values.workmode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    class="border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                  >
                    <option selected ><p className="text-gray-900">Choose Workmode</p></option>
                    <option value="On-Site">On-Site</option>
                    <option value="Remote">Remote</option>
                  </select>
                  {/* <input
                    type="text"
                    id="first_name"
                    name="workmode"
                    value={values.workmode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                    placeholder="On-Site / Remote"
                    required
                  /> */}
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Experience From
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="experience_from"
                    value={values.experience_from}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                    placeholder="Min Year"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Experience To
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="experience_to"
                    value={values.experience_to}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                    placeholder="Max Year"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Job Description
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    value={values.job_description}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="job_description"
                    className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                    placeholder="Description of Job"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Criteria
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="criteria"
                    value={values.criteria}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                    placeholder="Criteria"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Payscale From
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="payscale_from"
                    value={values.payscale_from}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                    placeholder="From Range"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 ">
                    Payscale To
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="payscale_to"
                    value={values.payscale_to}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5   dark:placeholder-gray-400 dark:text-gray-900 "
                    placeholder="To Range"
                    required
                  />
                </div>
              </div>
              <div className="flex space-x-2 justify-center">
                <button
                  type="submit"
                  className="inline-block px-6 py-2.5 bg-black text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                >
                  POST
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecruiterJobAdd
