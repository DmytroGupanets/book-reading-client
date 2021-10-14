import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string()
    .required("this is mandatory area")
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
      "Invalid format"
    ),
  password: Yup.string()
    .required("this is mandatory area")
    .min(8, "password must be at least 8 characters")
    .matches(/(?=.*[0-9])/, "password must contain a number"),
});
