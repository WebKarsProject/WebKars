import * as yup from "yup";
import { IAddress } from "../../interface";
import { SchemaOf } from "yup";

export const addressSchema: SchemaOf<IAddress> = yup.object().shape({
  zipcode: yup.string().required(),
  city: yup.string().required(),
  street: yup.string().required(),
  state: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string().required(),
});
