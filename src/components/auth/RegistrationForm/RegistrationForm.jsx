import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import GoogleButton from "../GoogleButton/GoogleButton";
import { registerValidationSchema } from "../validation/validationSchema";
import { register } from "../../../redux/auth/authOperations";
import { RegistrationFormStyled } from "./RegistrationFormStyled";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../App";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getError } from "../../../redux/auth/authSelectors";
import { resetError } from "../../../redux/auth/authActions";

const RegistrationForm = () => {
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const isError = useSelector(getError);

  const notify = () =>
    toast.error("Kористувач вже зареєстрований", {
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
            Ім’я
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
            <div className="inputError">{formik.errors.name}</div>
          )}
        </div>

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
        <div className="formGroup">
          <label className="formLabel" htmlFor="password">
            Пароль
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
            <div className="inputError">{formik.errors.password}</div>
          )}
        </div>
        <div className="formGroup">
          <label className="formLabel" htmlFor="confirmPassword">
            Підтвердити пароль
            <span className="formLabelStar"> *</span>
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="formInput"
            name="confirmPassword"
            placeholder="..."
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <div className="inputError">{formik.errors.confirmPassword}</div>
          )}
        </div>
        <div className="wrapperButton">
          <button type="submit" className="authButton">
            Зареєструватися
          </button>
        </div>
        <div className="loginContainer">
          Вже з нами?
          <Link to="/auth/login" className="login">
            Увійти
          </Link>
        </div>
      </form>
    </RegistrationFormStyled>
  );
};

export default RegistrationForm;
