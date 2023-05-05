import * as yup from "yup";
import { IAddress, IAddressUpdate } from "../../interface";
import { SchemaOf } from "yup";

export const addressSchema: SchemaOf<IAddress> = yup.object().shape({
  zipcode: yup.string().required(),
  city: yup.string().required(),
  street: yup.string().required(),
  state: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string().required(),
});

export const addressUpdateSchema: SchemaOf<IAddressUpdate> = yup
  .object()
  .shape({
    zipcode: yup.string().notRequired(),
    city: yup.string().notRequired(),
    street: yup.string().notRequired(),
    state: yup.string().notRequired(),
    number: yup.string().notRequired(),
    complement: yup.string().notRequired(),
  });
