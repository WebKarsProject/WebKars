import * as yup from "yup";

export const CreateAnnouncementModalSchema = yup.object().shape({
  brand: yup.string().required(),
  model: yup.string().required(),
  year: yup.string().required(),
  fuel: yup.string().required(),
  mileage: yup.string().required(),
  color: yup.string().required(),
  fipe: yup.number().required(),
  price: yup.number().required(),
  description: yup.string().notRequired(),
  published: yup.string().required(),
  img: yup.string().notRequired(),
});
