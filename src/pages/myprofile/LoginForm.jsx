import { ToggleSwitch } from "flowbite-react";
import { Form } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { object, string } from "yup";

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
  const [rememberMe, setRememberMe] = useState(true);
  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };
  return (
    <Form>
      <div className="flex flex-col max-w-[400px] mx-auto ">
        <input
          className=" border-b-2 border-x-0 border-t-0 mb-2"
          label="E-posta"
          name="email"
          id="email"
          type="email"
          value={values?.email}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.email && errors.email}
          error={touched.email && Boolean(errors.email)}
        />
        <input
          className="border-b-2 border-x-0 border-t-0 mb-3"
          label="Şifre"
          name="password"
          id="password"
          type="password"
          value={values?.password}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.password && errors.password}
          error={touched.password && Boolean(errors.password)}
        />

        <div className="flex justify-between max-w-[400px] mb-4" id="toggle">
          <ToggleSwitch
            checked={rememberMe}
            label="Beni Hatırla"
            onChange={handleRememberMeChange}
          />

          <Link className="underline" to="/">
            Parolanızı mı unuttunuz?
          </Link>
        </div>

        <div className="flex max-w-[400px] mx-auto justify-center gap-5 font-semibold">
          <button className="py-2 px-6 rounded-full bg-red-600 hover:bg-red-300 text-white">
            <Link type="submit" to="/">
              Giriş Yap
            </Link>
          </button>
          <button className="py-2 px-6 border-2 border-black bg-black hover:bg-white hover:text-black text-white rounded-full">
            <Link to="/register">Üye Ol</Link>
          </button>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
