import * as Yup from "yup";

const email = Yup.string()
  .required("необхідно заповнити поле")
  .max(63, "email повинен складатися не бiльше ніж з 63 символів")
  .matches(
    // /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
    /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)*\.(.*@.+(\..{2,6})?)$/,
    // /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,6})$/,
    "невірний формат"
  );

const password = Yup.string()
  .required("необхідно заповнити поле")
  .min(5, "пароль повинен складатися не менше ніж з 5 символів")
  .matches(/(?=.*[0-9])/, "пароль повинен містити цифри");

export const loginValidationSchema = Yup.object({
  email,
  password,
});

export const registerValidationSchema = Yup.object({
  name: Yup.string()
    .required("необхідно заповнити поле")
    .min(3, "ім'я повинне складатися не менше ніж з 3 символів")
    .max(100, "ім'я повинне складатися не бiльше ніж з 100 символів"),
  email,
  password,
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "паролі повинні співпадати"
  ),
});
