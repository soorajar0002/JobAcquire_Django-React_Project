import * as Yup from 'yup';
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const signUpSchema = Yup.object({
  first_name: Yup.string()
    .min(2, 'Name field must contain atleast 2 characters.')
    .required('This field is required.'),
  last_name: Yup.string()
    .min(2, 'Name field must contain atleast 2 characters.')
    .required('This field is required.'),
  email: Yup.string()

    .email('Email must be a valid email.')
    .required('This field is required.'),
  phone_number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid.')
    .required('This field is required.'),
  password: Yup.string().min(6).required('This field is required.'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match.')
    .required('This field is required.'),
});

export const logInSchema = Yup.object({
  email: Yup.string()
    .email('Email must be a valid email.')
    .required('This field is required.'),
  password: Yup.string().min(6).required('This field is required.'),
});

export const signUpSchemaRec = Yup.object({
  first_name: Yup.string()
    .min(2, 'Name field must contain atleast 2 characters.')
    .required('This field is required.'),
  last_name: Yup.string()
    .min(2, 'Name field must contain atleast 2 characters.')
    .required('This field is required.'),
  company_name:Yup.string()
    .min(2, 'Name field must contain atleast 2 characters.')
    .required('This field is required.'),  
  email: Yup.string().email('Email must be a valid email.')
    .required('This field is required.'),
  phone_number: Yup.string()
    .matches(phoneRegExp, 'Phone number is not valid.')
    .required('This field is required.'),
  password: Yup.string().min(6).required('This field is required.'),
  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match.')
    .required('This field is required.'),
});
