import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICreateAnnouncementModal, IImgUrl } from "../../interface";

const ImageSchema: SchemaOf<IImgUrl> = yup.object().shape({
  img_url: yup.string().required(),
});

export const CreateAnnouncementModalSchema: SchemaOf<ICreateAnnouncementModal> =
  yup.object().shape({
    brand: yup.string().required(),
    model: yup.string().required(),
    year: yup.string().required(),
    fuel: yup.string().required(),
    mileage: yup.number().required(),
    price: yup.number().required(),
    fipe: yup.number().required(),
    description: yup.string().notRequired(),
    published: yup.boolean().notRequired(),
    color: yup.string().required(),
    image: yup.string().notRequired(),
  });
