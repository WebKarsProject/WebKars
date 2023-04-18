import * as yup from "yup";
import { addressSchema } from "../address";

export const userSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  password: yup.string().required(),
  birthday: yup.date().required(),
  description: yup.string().required(),
  buyer: yup.boolean().required(),
  address: addressSchema,
});
