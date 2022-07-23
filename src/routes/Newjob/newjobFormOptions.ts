import * as Yup from "yup";

export const newjobFormOptions = Yup.object().shape({
  title: Yup.string().required(" title is required !"),
  description: Yup.string().required("description is required !"),
  city: Yup.string().ensure().required("city is required !"),
});
