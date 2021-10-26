import * as Yup from "yup";

const email = Yup.string()
  .required("this is mandatory area")
  .min(10, "email must be at least 10 characters")
  .max(63, "email must contain no more than 63 characters")
  .matches(
    /^[\w*;!:"'#%^*+&$§]{1}[\w\-*;!:"'#%^*+&$§.]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/i,
    // /^(?![-.])[\w\-*;!:"'#%^*+&$§.]+@([a-z-_]+)(\.[a-z-_]+)*\.[a-z]{2,6}$/i,
    "invalid format"
  );

const password = Yup.string()
  .required("this is mandatory area")
  .min(5, "password must be at least 5 characters")
  .matches(
    /^(?![-.])[\w*;!:"'@#%^*&$§?.-]{5,30}$/i,
    "password can be with numbers, letters, characters"
  );

const name = Yup.string()
  .required("this is mandatory area")
  .min(3, "name must be at least 3 characters")
  .max(100, "name must contain no more than 100 characters")
  .matches(
    /^(?=[a-zA-Zа-яА-ЯІіЇїЄєҐґ'0-9])[a-zA-Zа-яА-ЯІіЇїЄєҐґ'0-9 -]{3,100}$/i,
    "invalid format"
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
    "passwords must match"
  ),
});
