import { useFormik } from "formik";
import GoogleButton from "../GoogleButton/GoogleButton";
import LoginFormStyled from "./LoginFormStyled";
import { loginValidationSchema } from "../validation/validationSchema";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginValidationSchema,

    onSubmit: (data) => {
      console.log(data);
    },
  });

  return (
    <LoginFormStyled>
      <GoogleButton />
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="formGroup">
          <label className="formLabel" htmlFor="email">
            Електронна адреса
            <span className="formLabelStar"> *</span>
          </label>
          <input
            id="email"
            type="email"
            className="formInput"
            name="email"
            placeholder="your@email.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="inputError">{formik.errors.email}</div>
          )}
        </div>
        <label className="formLabel" htmlFor="password">
          Пароль
          <span className="formLabelStar"> *</span>
        </label>
        <input
          id="password"
          type="password"
          className="formInput"
          name="password"
          placeholder="..."
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <div className="wrapperButton">
          <button type="submit" className="authButton">
            Увійти
          </button>
        </div>
        <div className="loginContainer">
          <Link to="/register" className="login">
            Реєстрація
          </Link>
        </div>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
