import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUrlImg, IVehicleBody } from "../../interface";

export const ImageSchema: SchemaOf<IUrlImg> = yup.object().shape({
  img_url: yup.string().required(),
});

export const IVehicleSchema: SchemaOf<IVehicleBody> = yup.object().shape({
  brand: yup.string().required("Campo obrigatório"),
  model: yup.string().required("Campo obrigatório"),
  year: yup.string().required("Campo obrigatório"),
  fuel: yup.string().required("Campo obrigatório"),
  mileage: yup.number().required("Campo obrigatório"),
  price: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/^[0-9]*$/, "Digite apenas numeros"),
  fipe: yup.number().required("Campo obrigatório"),
  description: yup.string().required("Campo obrigatório"),
  published: yup.boolean().notRequired(),
  color: yup.string().required("Campo obrigatório"),
  images: yup.array().required(),
});
