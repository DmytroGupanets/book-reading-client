import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import GoogleButton from "../GoogleButton/GoogleButton";
import LoginFormStyled from "./LoginFormStyled";
import { loginValidationSchema } from "../validation/validationSchema";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/auth/authOperations";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getError } from "../../../redux/auth/authSelectors";
import { resetError } from "../../../redux/auth/authActions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
const { t } = useTranslation();  

const isError = useSelector(getError);
  const notify = () =>
    toast.error("Невiрний пароль/email або користувач не зареєстрований", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    if (isError !== null) {
      notify();
    }
    return dispatch(resetError());
  }, [isError, dispatch]);

  // useEffect(() => {
  //   if (isError !== null) {
  //     notify();
  //   }
  // }, [isError, dispatch]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginValidationSchema,

    onSubmit: ({ email, password }) => {
      const user = {
        email: email.toLowerCase(),
        password,
      };
      console.log(user);
      dispatch(login(user));
    },
  });

  return (
    <LoginFormStyled colors={theme}>
      <GoogleButton />
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="formGroup emailInput">
          <label className="formLabel" htmlFor="email">
            {t("Email")}
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
        <div className="formGroup">
          <label className="formLabel" htmlFor="password">
            {t("Password")}
            <span className="formLabelStar"> *</span>
          </label>
          <input
            id="password"
            type="password"
            minLength="5"
            maxLength="30"
            className="formInput"
            name="password"
            placeholder={t("Password")}
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="inputError">{formik.errors.password}</div>
          )}
        </div>
        <div className="wrapperButton">
          <button type="submit" className="authButton">
            {t("Login")}
          </button>
        </div>
        <div className="registContainer">
          <Link to="/auth/register" className="registerLink">
            {t("Registration")}
          </Link>
        </div>
      </form>
      {isError && <h2>Проблемка</h2>}
    </LoginFormStyled>
  );
};

export default LoginForm;
