import React from 'react'
import { object, string, boolean } from "yup";
import {  Checkbox, Label,  TextInput } from "flowbite-react";
import { useState } from 'react';

export const registerSchema = object({
  email: string().email().required("email girişi zorunludur"),
  password1: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
  password2: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
  remember: boolean().oneOf([true], "Checkbox işaretli olmalıdır"),
});
const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <img
        src="./assets/NadideLogo.png"
        className="flex m-auto"
        width={300}
        height={300}
        alt=""
      />
      <form className="flex max-w-2xl  m-auto border-4 flex-col gap-4">
        <p className="font-semibold text-center  text-xl mt-3">Yeni Üyelik </p>
        <div>
          <div className="md:flex  block justify-between pr-4 pl-4 items-center  my-2 ">
            <Label htmlFor="name" value="Adı" />

            <TextInput
              id="name"
              className="w-[330px] "
              required
              type="text"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
            />
          </div>

          <div className="md:flex  block justify-between pr-4 pl-4 items-center  my-2">
            <Label htmlFor="soyadı" value="Soyadı" />

            <TextInput id="soyadı" className="w-[330px] " type="text" />
          </div>
          <div className="md:flex  block justify-between pr-4 pl-4 items-center  my-2">
            <Label htmlFor="email" value="E-mail" />

            <TextInput id="email" className="w-[330px] " type="email" />
          </div>

          <div className="md:flex  block justify-between pr-4 pl-4 items-center  my-2">
            <Label htmlFor="password1" value="Şifre" />

            <TextInput id="password1" className="w-[330px] " type="password" />
          </div>
          <div className="md:flex  block justify-between pr-4 pl-4 items-center  my-2">
            <Label htmlFor="password2" value="Şifre Tekrarı" />

            <TextInput id="password2" className="w-[330px] " type="password" />
          </div>
          <p>
            password en az 8 karakter en fazla 20 bir sayı bir küçük harf bir
            büyük harf bir özel karakter içermelidir",
          </p>
        </div>

        <div className="m-4  ">
          <div className="my-4">
            <input
              type="checkbox"
              id="remember"
              name="remember"
              checked={values.remember}
              onChange={handleChange}
            />

            <Label htmlFor="remember">
              Aydınlatma Metninde Belirtilen ilkeler nezdinde Elektronik Ticaret
              İletisi almak istiyorum
            </Label>
            <p className="mt-2 text-sm text-green-600 dark:text-black">
              {" "}
              {touched.remember && errors.remember}
            </p>
          </div>
          <div className="my-4">
            <Checkbox id="remember1" />
            <Label htmlFor="remember1">
              Üyelik sözleşmesini kabul ediyorum
            </Label>
          </div>
          <div>
            <Checkbox id="remember2" />
            <Label htmlFor="remember2">
              Kişisel verilerin işlenmesine ilişkin Ayndınlatma Metnini okudum{" "}
            </Label>
          </div>
        </div>

        <div className="flex justify-evenly mt-3">
          <button
            type="button"
            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 rounded-[50px] text-md h-12 w-64 px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
          >
            İptal
          </button>
          <button
            type="submit"
            className="text-white flex  items-center justify-center py-2 gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-[50px] text-md h-12   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-64 "
          >
            Kaydet
          </button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm
