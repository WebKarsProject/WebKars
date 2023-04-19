import * as yup from "yup";
import { SchemaOf } from "yup";
import { addressSchema } from "../address";
import { IUser } from "../../interface";

export const userSchema: SchemaOf<IUser> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  password: yup.string().required(),
  birthday: yup.date().required(),
  description: yup.string().notRequired(),
  buyer: yup.boolean().notRequired(),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
  address: yup.array().of(addressSchema).notRequired(),
});
