import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import GoogleButton from "../GoogleButton/GoogleButton";
import { registerValidationSchema } from "../validation/validationSchema";
import { register } from "../../../redux/auth/authOperations";
import { RegistrationFormStyled } from "./RegistrationFormStyled";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import { getError } from "../../../redux/auth/authSelectors";
import { resetError } from "../../../redux/auth/authActions";
import { error } from "@pnotify/core/dist/PNotify.js";
import { current } from "@reduxjs/toolkit";

const RegistrationForm = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isError = useSelector(getError);

  useEffect(() => {
    if (isError !== null) {
      error({
        text: t("user already registered"),
        delay: 3000,
      });
    }
    return dispatch(resetError());
  }, [isError, dispatch]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    validationSchema: registerValidationSchema,

    onSubmit: (data) => {
      // Формат данных для бэка
      const newUser = {
        name: data.name,
        email: data.email.toLowerCase(),
        password: data.password,
      };

      dispatch(register(newUser));
    },
  });

  return (
    <RegistrationFormStyled colors={theme}>
      <GoogleButton />
      <form className="form" onSubmit={formik.handleSubmit}>
        <div className="formGroup">
          <label className="formLabel" htmlFor="name">
            {t("Name")}
            <span className="formLabelStar"> *</span>
          </label>
          <input
            id="name"
            type="text"
            className="formInput"
            name="name"
            placeholder="..."
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name && (
            <div className="inputError">{t([formik.errors.name])}</div>
          )}
        </div>

        <div className="formGroup">
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
            className="formInput"
            name="password"
            minLength="5"
            maxLength="30"
            placeholder="..."
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && (
            <div className="inputError">{t([formik.errors.password])}</div>
          )}
        </div>
        <div className="formGroup">
          <label className="formLabel" htmlFor="confirmPassword">
            {t("Confirm password")}
            <span className="formLabelStar"> *</span>
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="formInput"
            name="confirmPassword"
            maxLength="30"
            onPaste={(e) => {
              e.preventDefault();
            }}
            placeholder="..."
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <div className="inputError">
              {t([formik.errors.confirmPassword])}
            </div>
          )}
        </div>
        <div className="wrapperButton">
          <button type="submit" className="authButton">
            {t("Register")}
          </button>
        </div>
        <div className="loginContainer">
          <Link to="/auth/login" className="loginText">
            {t("With us already")}?<span className="login">{t("Login")}</span>
          </Link>
        </div>
      </form>
    </RegistrationFormStyled>
  );
};

export default RegistrationForm;
