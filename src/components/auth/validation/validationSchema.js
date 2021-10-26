import * as Yup from "yup";

const email = Yup.string()
  .required("необхідно заповнити поле")
  .min(10, "email повинен складатися не менше ніж з 10 символів")
  .max(63, "email повинен складатися не бiльше ніж з 63 символів")
  .matches(
    /^[\w*;!:"'#%^*+&?$§]{1}[\w\-*;!:"'#%^?*+&$§.]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
    "невірний формат"
  );

const password = Yup.string()
  .required("необхідно заповнити поле")
  .min(5, "пароль повинен складатися не менше ніж з 5 символів")
  .matches(
    /^(?![-.])[\w*;!:"'@#%^*&$§?.-]{5,30}$/i,
    "пароль може складатися з цифр, букв та символiв"
  );

const name = Yup.string()
  .required("необхідно заповнити поле")
  .min(3, "ім'я повинне складатися не менше ніж з 3 символів")
  .max(100, "ім'я повинне складатися не бiльше ніж з 100 символів")
  .matches(
    /^(?=[a-zA-Zа-яА-ЯІіЇїЄєҐґ'0-9])[a-zA-Zа-яА-ЯІіЇїЄєҐґ'0-9 -]{3,100}$/i,
    "невірний формат"
  );

export const loginValidationSchema = Yup.object({
  email,
  password,
});

export const registerValidationSchema = Yup.object({
  name,
  email,
  password,
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "паролі повинні співпадати"
  ),
});
