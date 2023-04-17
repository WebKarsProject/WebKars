import * as yup from "yup";

export const CreateAnnouncementModalSchema = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.date().required(),
  fuel: yup.string().required(),
  mileage: yup.string().required(),
  color: yup.string().required(),
  fipe: yup.number().required(),
  price: yup.number().required(),
  description: yup.string().required(),
  published: yup.string().notRequired(),
  img: yup.array().notRequired(),
});
