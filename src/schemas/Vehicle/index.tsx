import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUrlImg, IVehicleBody } from "../../interface";

export const ImageSchema: SchemaOf<IUrlImg> = yup.object().shape({
  id: yup.string().notRequired(),
  img_url: yup.string().required(),
});

export const IVehicleSchema: SchemaOf<IVehicleBody> = yup.object().shape({
  id: yup.string().notRequired(),
  brand: yup.string().required("Campo obrigatório"),
  model: yup.string().required("Campo obrigatório"),
  year: yup.string().notRequired(),
  fuel: yup.string().notRequired(),
  mileage: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/^[0-9]*$/, "Digite apenas numeros"),
  price: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/^[0-9]*$/, "Digite apenas numeros"),
  fipe: yup.string().notRequired(),
  description: yup.string().required("Campo obrigatório"),
  published: yup.boolean().notRequired(),
  color: yup.string().required("Campo obrigatório"),
  images: yup.array().required(),
});
