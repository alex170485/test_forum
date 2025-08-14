import { object, string, ObjectSchema } from 'yup';
import { FieldValues } from 'react-hook-form';

const EMAIL_REGEX = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$');

export const loginValidation: ObjectSchema<FieldValues> = object().shape({
  email: string().required('Поле Обязательно').matches(EMAIL_REGEX, 'Введите корректный email'),
  password: string().required('Поле обязательно'),
});
