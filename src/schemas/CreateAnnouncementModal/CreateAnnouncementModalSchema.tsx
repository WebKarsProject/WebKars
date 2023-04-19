import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICreateAnnouncementModal, IImage } from "../../interface";

const ImageSchema: SchemaOf<IImage> = yup.object().shape({
  img: yup.string().notRequired(),
});

export const CreateAnnouncementModalSchema: SchemaOf<ICreateAnnouncementModal> =
  yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.string().required(),
    fuel: yup.string().required(),
    mileage: yup.number().required(),
    color: yup.string().required(),
    fipe: yup.number().required(),
    price: yup.number().required(),
    description: yup.string().notRequired(),
    published: yup.boolean().notRequired(),
    img: yup.string().notRequired(),
  });
