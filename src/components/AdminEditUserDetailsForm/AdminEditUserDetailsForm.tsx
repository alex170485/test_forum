import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { UserType } from '@/types.ts';
import { adminEditUserDetailsValidation } from '@/components/AdminEditUserDetailsForm/validation.ts';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Avatar } from '@/shared/ui/Avatar/Avatar.tsx';
import { FormProviderWrapper } from '@/shared/ui/form/FormProviderWrapper/FormProviderWrapper.tsx';
import { FormInput } from '@/shared/ui/form/FormInput/FormInput.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import {
  AdminEditUserDetailsPayloadType,
  useAdminEditUserDetailsQuery,
} from '@/apiHooks/useAdminEditUserDetailsQuery.ts';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';
import { useEffect } from 'react';

type AdminEditUserDetailsFormPropsType = {
  user?: UserType;
  onClose: () => void;
  isLoading: boolean;
};

export const AdminEditUserDetailsForm = ({ user, onClose, isLoading }: AdminEditUserDetailsFormPropsType) => {
  const { mutate } = useAdminEditUserDetailsQuery(String(user?.id), onClose);

  const methods = useForm<FieldValues>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(adminEditUserDetailsValidation),
    defaultValues: {
      firstName: '',
      middleName: user?.middleName || '',
      lastName: user?.lastName || '',
    },
  });

  const { handleSubmit, setValue } = methods;

  const onSubmit = (payload: AdminEditUserDetailsPayloadType) => {
    mutate(payload);
  };

  useEffect(() => {
    if (user) {
      setValue('firstName', user?.firstName);
      setValue('middleName', user?.middleName);
      setValue('lastName', user?.lastName);
    }
  }, [user]);

  if (isLoading) return <Loader />;

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
          };

          onSubmit(payload);
        })}
      >
        <Box width='100%' display='flex' flexDirection='column' columnGap='30px'>
          <Box width='100%' display='flex' flexDirection='column' columnGap='24px'>
            <FormInput label='Имя' name='firstName' placeholder='Введите Имя' />
            <FormInput label='Отчество' name='middleName' placeholder='Введите Отчество' />
            <FormInput label='Фамилия' name='lastName' placeholder='Введите Фамилия' />
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
