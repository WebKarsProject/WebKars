import * as yup from "yup";

export const addressSchema = yup.object().shape({
  zipcode: yup.string().required(),
  city: yup.string().required(),
  street: yup.string().required(),
  state: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string().required(),
});
