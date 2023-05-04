import * as yup from 'yup';
import { SchemaOf } from 'yup';
import { IRegisterComment } from '../../interface';

export const commentSchema: SchemaOf<IRegisterComment> = yup.object().shape({
  description: yup.string().required(),
});
