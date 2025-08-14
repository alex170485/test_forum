import { FormProvider, UseFormReturn } from 'react-hook-form';
import { ReactNode } from 'react';
import { Form } from './styles.tsx';

type FormProviderWrapperPropsType = {
  methods: UseFormReturn;
  onSubmit: (data: never) => void;
  children: ReactNode;
};

export const FormProviderWrapper = ({ methods, onSubmit, children }: FormProviderWrapperPropsType) => {
  return (
    <FormProvider {...methods}>
      <Form onSubmit={onSubmit}>{children}</Form>
    </FormProvider>
  );
};
