import React from 'react'
import RegisterForm, { registerSchema } from '../../components/register/RegisterForm';
import { Formik } from 'formik';

const Register = () => {
  return (
    <div className=" flex flex-col justify-center  mx-auto">
      <Formik
        initialValues={{
          remember: false,
          email: "",
          password1: "",
          password2: "",
        }}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
          actions.setSubmitting(false);
        }}
        component={(props) => <RegisterForm {...props} />}
      ></Formik>
    </div>
  );
}

export default Register