import * as Yup from "yup"
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const URL = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
export const signUpSchema = Yup.object({
  first_name: Yup.string()
    .min(2, "Name field must contain atleast 2 characters.")
    .required("This field is required."),
  last_name: Yup.string()
    .min(2, "Name field must contain atleast 2 characters.")
    .required("This field is required."),
  email: Yup.string()

    .email("Email must be a valid email.")
    .required("This field is required."),
  phone_number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid.")
    .required("This field is required."),
  password: Yup.string().min(6).required("This field is required."),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match.")
    .required("This field is required."),
})

export const logInSchema = Yup.object({
  email: Yup.string()
    .email("Email must be a valid email.")
    .required("This field is required."),
  password: Yup.string().min(6).required("This field is required."),
})

export const signUpSchemaRec = Yup.object({
  first_name: Yup.string()
    .min(2, "Name field must contain atleast 2 characters.")
    .required("This field is required."),
  last_name: Yup.string()
    .min(2, "Name field must contain atleast 2 characters.")
    .required("This field is required."),
  email: Yup.string()
    .email("Email must be a valid email.")
    .required("This field is required."),
  phone_number: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid.")
    .required("This field is required."),
  password: Yup.string().min(6).required("This field is required."),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match.")
    .required("This field is required."),
})

export const UserProfileEditSchema = Yup.object({
  title: Yup.string().min(3, "Title field must contain atleast 3 characters."),
  bio: Yup.string().min(20, "Bio field must contain atleast 20 characters."),
  skill: Yup.string().min(3, "Skill field must contain atleast 2 skills."),
  first_name: Yup.string().min(
    2,
    "Name field must contain atleast 2 characters."
  ),
  last_name: Yup.string().min(
    1,
    "Name field must contain atleast 1 characters."
  ),
  email: Yup.string().email("Email must be a valid email."),
  phone_number: Yup.string().matches(phoneRegExp, "Phone number is not valid."),
  desired_job: Yup.string().min(
    5,
    "Desired Job field must contain atleast 5 characters."
  ),
  desired_location: Yup.string().min(
    5,
    "Desired Location field must contain atleast 5 characters."
  ),
  designation: Yup.string().min(
    5,
    "Designation field must contain atleast 5 characters."
  ),
  company: Yup.string().min(
    5,
    "Company Name field must contain atleast 5 characters."
  ),
  joining_year: Yup.string().max(4, "Joining Year field must be valid"),
  passout_year: Yup.string().max(4, "Pass Out Year field must be valid"),
  start: Yup.string().max(4, "Start Year field must be valid"),
  end: Yup.string().max(4, "End Year field must be valid"),
  degree: Yup.string().min(
    5,
    "Degree field must contain atleast 5 characters."
  ),
  college: Yup.string().min(
    5,
    "College Name field must contain atleast 5 characters."
  ),
  percentage: Yup.string().max(
    5,
    "Percentage field value should be out of 100"
  ),
})

export const RecUpdateSchema = Yup.object({
  first_name: Yup.string().min(
    2,
    "Name field must contain atleast 2 characters."
  ),

  last_name: Yup.string().min(
    2,
    "Name field must contain atleast 2 characters."
  ),

  email: Yup.string().email("Email must be a valid email."),

  phone_number: Yup.string().matches(phoneRegExp, "Phone number is not valid."),
})

export const RecProfileUpdateSchema = Yup.object({
  company_address_line1: Yup.string().min(10,"Address field must contain atleast 10 characters."),
  company_address_line2:Yup.string().min(10,"Address field must contain atleast 10 characters."),
  company_email: Yup.string().email("Email must be a valid email."),
  company_mobile: Yup.string().matches(phoneRegExp, "Phone number is not valid."),
  company_name: Yup.string().min(2,"Name field must contain atleast 2 characters."),
  company_website: Yup.string().matches(URL, 'Enter a valid url'),
  description: Yup.string().min(10,"Address field must contain atleast 10 characters."),
  location: Yup.string().min(2,"Location field must contain atleast 2 characters."),
  position: Yup.string().min(2,"Position field must contain atleast 2 characters."),
  recruiter_bio: Yup.string().min(20,"Bio field must contain atleast 20 characters."),
})


