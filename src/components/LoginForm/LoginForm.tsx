import { Title, Wrapper } from '@/components/LoginForm/styles..tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidation } from '@/components/LoginForm/validation.ts';
import { FormInput } from '@/shared/ui/form/FormInput/FormInput.tsx';
import { FormProviderWrapper } from '@/shared/ui/form/FormProviderWrapper/FormProviderWrapper.tsx';

type LoginFormPropsType = {
  onClose: () => void;
};

export const LoginForm = ({ onClose }: LoginFormPropsType) => {
  const methods = useForm<FieldValues>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(loginValidation),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (values: FieldValues) => {
    console.log('111', values);
  };

  return (
    <Wrapper>
      <Box display='flex' flexDirection='column' rowGap='8px'>
        <Title>Логин</Title>
        <FormProviderWrapper
          methods={methods}
          onSubmit={handleSubmit((values) => {
            onSubmit(values);
          })}
        >
          <FormInput label='email' name='email' />
          <FormInput label='password' name='password' />

          <Box width='100%' display='flex' justifyContent='space-between' columnGap='20px' mt='20px'>
            <Button variant='primary' onClick={onClose}>
              Закрыть
            </Button>
            <Button variant='primary' type='submit'>
              Воити
            </Button>
          </Box>
        </FormProviderWrapper>
      </Box>
    </Wrapper>
  );
};
