

import { Formik } from "formik";
import LoginForm, { loginSchema } from "../../components/login/LoginForm";

const Login = () => {

  return (
    <div className=" flex flex-col justify-center  mx-auto">
           <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={loginSchema}
          onSubmit={(values, actions) => {
            //   login(values);
            actions.resetForm();
            actions.setSubmitting(false);
          }}
          component={(props) => <LoginForm {...props} />}
        ></Formik>
       </div>
  );
};
export default Login;
