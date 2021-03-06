import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import GoogleButton from "../GoogleButton/GoogleButton";
import LoginFormStyled from "./LoginFormStyled";
import { loginValidationSchema } from "../validation/validationSchema";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/auth/authOperations";
import { useEffect } from "react";
import colors from "../../../styles/lightColors";
import { getError } from "../../../redux/auth/authSelectors";
import { resetError } from "../../../redux/auth/authActions";
import { error } from "@pnotify/core/dist/PNotify.js";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/PNotify.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isError = useSelector(getError);

  useEffect(() => {
    if (isError !== null) {
      error({
        text: t("invalid password/email or user not registered"),
        delay: 3000,
      });
    }
    return dispatch(resetError());
  }, [isError, dispatch]);

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

      dispatch(login(user));
    },
  });

  return (
    <LoginFormStyled colors={colors}>
      <GoogleButton />
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="formGroup emailInput">
          <label className="formLabel" htmlFor="email">
            {t("Email")}
            <span className="formLabelStar"> *</span>
          </label>
          <input
            id="email"
            type="text"
            className="formInput"
            name="email"
            placeholder="your@email.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email && (
            <div className="inputError">{t([formik.errors.email])}</div>
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
            <div className="inputError">{t([formik.errors.password])}</div>
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
    </LoginFormStyled>
  );
};

export default LoginForm;
