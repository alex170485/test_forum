import { object, ObjectSchema, string } from 'yup';
import { FieldValues } from 'react-hook-form';

export const editProfileValidation: ObjectSchema<FieldValues> = object().shape({
  firstName: string().required('Поле обязательно'),
  middleName: string(),
  lastName: string().required('Поле обязательно'),
  nickname: string(),
  description: string(),
});
