import { object, ObjectSchema, string } from 'yup';
import { FieldValues } from 'react-hook-form';

export const createForumValidation: ObjectSchema<FieldValues> = object().shape({
  title: string().required('Поле обязательно'),
  comment: string().max(200, 'Максимальная длинна 200 символов'),
});
