import { UserType } from '@/types.ts';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editUserDetailsValidation } from '@/components/EditUserDetailsForm/validation.ts';
import { FormProviderWrapper } from '@/shared/ui/form/FormProviderWrapper/FormProviderWrapper.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FormInput } from '@/shared/ui/form/FormInput/FormInput.tsx';
import { FormTextArea } from '@/shared/ui/form/FormTextArea/FormTextArea.tsx';
import { Avatar } from '@/shared/ui/Avatar/Avatar.tsx';
import { useEditUserDetailsQuery } from '@/apiHooks/useEditUserDetailsQuery.ts';
import { EditUserDetailsPayloadType } from '@/api/updateUserDetailsApi.ts';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';

type EditProfileFormDataPropsType = {
  user?: UserType;
  onClose: () => void;
  isLoading?: boolean;
};

export const EditUserDetailsForm = ({ user, onClose, isLoading }: EditProfileFormDataPropsType) => {
  if (isLoading) return <Loader />;

  const { mutate } = useEditUserDetailsQuery(String(user?.id), onClose);

  const methods = useForm<FieldValues>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(editUserDetailsValidation),
    defaultValues: {
      firstName: user?.firstName || '',
      middleName: user?.middleName || '',
      lastName: user?.lastName || '',
      nickname: user?.nickname || '',
      description: user?.description || '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (values: EditUserDetailsPayloadType) => {
    mutate(values);
  };

  return (
    <Box width='100%' display='flex' flexDirection='column' m={['40px', '0px']}>
      <Box width='100%' display='flex' alignItems='center' justifyContent='center'>
        <Avatar avatarUrl={user?.avatarUrl} size='medium' />
      </Box>
      <FormProviderWrapper
        methods={methods}
        onSubmit={handleSubmit((values) => {
          const payload = {
            firstName: values.firstName,
            middleName: values.middleName,
            lastName: values.lastName,
            nickname: values.nickname,
            description: values.description,
          };

          onSubmit(payload);
        })}
      >
        <Box width='100%' display='flex' flexDirection='column' columnGap='30px'>
          <Box width='100%' display='flex' flexDirection='column' columnGap='24px'>
            <FormInput label='Имя' name='firstName' placeholder='Введите Имя' />
            <FormInput label='Отчество' name='middleName' placeholder='Введите Отчество' />
            <FormInput label='Фамилия' name='lastName' placeholder='Введите Фамилия' />
            <FormInput label='Форумное Имя' name='nickname' placeholder='Введите Форумное Имя' />
            <FormTextArea label='Описание' name='description' placeholder='Введите Описание' />
          </Box>
          <Box width='100%' display='flex' justifyContent='space-between' columnGap='20px' mt='20px'>
            <Button onClick={onClose}>Закрыть</Button>
            <Button type='submit'>Обновить</Button>
          </Box>
        </Box>
      </FormProviderWrapper>
    </Box>
  );
};
