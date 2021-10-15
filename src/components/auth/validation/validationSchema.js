import * as Yup from "yup";

const email = Yup.string()
  .required("НЕОБХОДИМО ЗАПОЛНИТЬ ПОЛЕ")
  .matches(
    /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
    "Invalid format"
  );

const password = Yup.string()
  .required("this is mandatory area")
  .min(8, "password must be at least 8 characters")
  .matches(/(?=.*[0-9])/, "password must contain a number");

export const loginValidationSchema = Yup.object({
  email,
  password,
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required("НЕОБХОДИМО ЗАПОЛНИТЬ ПОЛЕ"),
  email,
  password,
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});
