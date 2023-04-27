import * as yup from "yup";
import { IPassword, IUser } from "../../interface";
import { SchemaOf } from "yup";

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
  zipcode: yup.string().required(),
  city: yup.string().required(),
  street: yup.string().required(),
  state: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string().notRequired(),
});

export const emailSchema = yup.object().shape({
  email: yup.string().required(),
});

export const passwordSchema: SchemaOf<IPassword> = yup.object().shape({
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      "Confirmação de senha deve ser igual a senha"
    ),
});
