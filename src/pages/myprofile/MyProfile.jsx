import React, { useState } from "react";
import { ToggleSwitch } from "flowbite-react";
import { TbLockSquareRoundedFilled } from "react-icons/tb";
import { Formik } from "formik";
import LoginForm, { loginSchema } from "./LoginForm";
// import useAuthCalls from "../hooks/useAuthCalls";
import { Link } from "react-router-dom";

const MyProfile = () => {
  //   const { login } = useAuthCalls();

  return (
    <div className=" flex flex-col justify-center  mx-auto">
      <div>
        <h1 className="text-center text-2xl font-bold mb-8">
          Nadide ile Evinizden Bir Tık Kadar Yakın Olan Alışverişe Hoş Geldiniz!
        </h1>
      </div>

      <div>
        <div className="flex justify-center mb-3">
          <TbLockSquareRoundedFilled className="w-16 h-16" />
        </div>
        <p className="text-center text-xl font-bold mb-3">Giriş Yapın</p>
        <p className="text-center font-semibold mb-8">
          Nadide Fırsatlar Dünyasına Giriş Yapın
        </p>

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
    </div>
  );
};
export default MyProfile;
