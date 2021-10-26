import * as Yup from "yup";

const title = Yup.string()
  .required("необхідно заповнити поле")
  .max(50, "Поле назви книги повинна складатися не бiльше ніж з 50 символів")
  .matches(
    /^([0-9A-ZА-ЯЁa-zа-яёА-Яа-яёЁЇїІіЄєҐґ ./?@!"№$%^&*()-_=])+$/,
    "Невірний формат назви книги"
  )
  .matches(
    /^[^\s].+[^\s]$/,
    "Назва не може починатись або завершуватися з пробіла"
  );

const author = Yup.string()
  .required("необхідно заповнити поле")
  .max(50, "Поле автор книги повинна складатися не бiльше ніж з 50 символів")
  .matches(
    /^([A-ZА-ЯЁa-zа-яёА-Яа-яёЁЇїІіЄєҐґ .,/?@!$%^&*()-_=])+$/,
    "Невірний формат автора"
  )
  .matches(/^[^0-9]+$/, "Поле автора не може містити цифри")
  .matches(
    /^\S+(?: \S+)*$/,
    "Назва не може починатись або завершуватися з пробіла"
  );

const year = Yup.string()
  .required("необхідно заповнити поле")
  .max(4, "рік повинен складатися не бiльше ніж з 4 символів")
  .matches(/^[1,2][0-9]{3}$/, "невірний формат року");

const pages = Yup.string()
  .required("необхідно заповнити поле")
  .max(4, "сторінки повинні складатися не бiльше ніж з 4 символів")
  .matches(/^([0-9_]{1,4})$/, "невірний формат сторінок");

export const libraryValidationSchema = Yup.object({
  title,
  author,
  year,
  pages,
});
