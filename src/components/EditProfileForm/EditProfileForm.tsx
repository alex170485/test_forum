import { UserType } from '@/types.ts';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { editProfileValidation } from '@/components/EditProfileForm/validation.ts';
import { FormProviderWrapper } from '@/shared/ui/form/FormProviderWrapper/FormProviderWrapper.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FormInput } from '@/shared/ui/form/FormInput/FormInput.tsx';
import { FormTextArea } from '@/shared/ui/form/FormTextArea/FormTextArea.tsx';
import { Avatar } from '@/shared/ui/Avatar/Avatar.tsx';
import { useUpdateUserDetailsQuery } from '@/apiHooks/useUpdateUserDetailsQuery.ts';
import { UpdateUserDetailsPayloadType } from '@/api/updateUserDetailsApi.ts';

type EditProfileFormDataPropsType = {
  user: UserType | null;
  onClose: () => void;
};

export const EditProfileForm = ({ user, onClose }: EditProfileFormDataPropsType) => {
  const { mutate } = useUpdateUserDetailsQuery(String(user?.id), onClose);

  const methods = useForm<FieldValues>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(editProfileValidation),
    defaultValues: {
      firstName: user?.firstName || '',
      middleName: user?.middleName || '',
      lastName: user?.lastName || '',
      nickname: user?.nickname || '',
      description: user?.description || '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (values: UpdateUserDetailsPayloadType) => {
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
