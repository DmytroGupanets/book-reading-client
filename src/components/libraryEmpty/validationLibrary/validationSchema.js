import * as Yup from "yup";

const title = Yup.string()
  .required("field must be filled")
  .max(50, "The book name field should contain no more than 50 characters")
  .matches(
    /^([0-9A-ZА-ЯЁa-zа-яёА-Яа-яёЁЇїІіЄєҐґ ./?@!"№$%^&*()-_=])+$/,
    "wrong book name format"
  )
  .matches(/^[^\s].+[^\s]$/, "name cannot begin or end with space");

const author = Yup.string()
  .required("field must be filled")
  .max(50, "The author field should contain no more than 50 characters")
  .matches(
    /^([A-ZА-ЯЁa-zа-яёА-Яа-яёЁЇїІіЄєҐґ .,/?@!$%^&*()-_=])+$/,
    "wrong author format"
  )
  .matches(/^[^0-9]+$/, "author field cannot have numbers")
  .matches(/^\S+(?: \S+)*$/, "name cannot begin or end with space");

const year = Yup.string()
  .required("field must be filled")
  .max(4, "Year must contain no more than 4 characters")
  .matches(/^[1,2][0-9]{3}$/, "wrong format of year");

const pages = Yup.string()
  .required("field must be filled")
  .max(4, "pages must contain no more than 4 characters")
  .matches(/^([0-9_]{1,4})$/, "wrong page format");

export const libraryValidationSchema = Yup.object({
  title,
  author,
  year,
  pages,
});
