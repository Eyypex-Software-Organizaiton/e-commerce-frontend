
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { object, string } from "yup";
import GoogleIcon from "../../helper/GoogleIcon";

import { Link, useNavigate } from "react-router-dom";
export const loginSchema = object({
  email: string()
    .email("Lutfen valid bir email giriniz")
    .required("Email zorunludur"),
  password: string()
    .required("password zorunludur")
    .min(8, "password en az 8 karakter olmalıdır")
    .max(20, "password en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Password bir sayı içermelidir")
    .matches(/[a-z]/, "Password bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Password bir büyük harf içermelidir")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password bir özel karakter içermelidir"),
});

const LoginForm = ({ values, handleChange, errors, touched, handleBlur }) => {
  const navigate = useNavigate();
  return (
    <>
      <img
        src="./assets/NadideLogo.png"
        className="flex m-auto"
        width={300}
        height={300}
        alt=""
      />
      <form className="flex m-auto   flex-col gap-4  ">
        <div className="border-2">
          <p className="text-xl font-bold text-center m-5"> Giriş Yap</p>
          <div className="m-5">
            <TextInput
              id="email1"
              placeholder="Email"
              required
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              className="w-[450px]  mb-4"
            />
            <p className="mt-2 text-sm text-green-600 dark:text-black">
              {" "}
              {touched.password && errors.password}
            </p>

            <TextInput
              id="password1"
              placeholder="Şifre"
              required
              type="password"
              className="w-[450px]"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
            />
            <p className="mt-2 text-sm text-green-600 dark:text-black">
              {" "}
              {touched.password && errors.password}
            </p>
          </div>
          <div className="flex items-center gap-2 m-5 justify-between">
            <div>
              <Checkbox id="remember" />
              <Label htmlFor="remember">Beni hatırla</Label>
            </div>

            <Link to="">Şifremi Unuttum</Link>
          </div>
          <button
            type="submit"
            className="text-white flex  items-center justify-center py-2 gap-1 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[50px] text-md h-12   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[350px] m-auto  mb-16 "
          >
            Giriş Yap
          </button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl text-center font-semibold mb-2 my-10">
            Henüz Üye Değil Misiniz ?
          </p>
          <button
            type="button"
            class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-[50px] text-md h-12 w-[450px] px-5 py-2.5 mr-2 mb-2 mt-5 dark:focus:ring-yellow-900"
            onClick={() => navigate("/register")}
          >
            Hemen Üye Ol
          </button>
        </div>
        <div>
          <button
            className="flex pt-2  w-64 h-11 rounded-[50px]  border-2"
            type="button"
          >
            <GoogleIcon color="currentColor" />
            Google ile Bağlan
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
