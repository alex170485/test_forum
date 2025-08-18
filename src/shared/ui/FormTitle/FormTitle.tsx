import { ReactNode } from 'react';
import { Wrapper } from '@/shared/ui/FormTitle/styles.tsx';

type FormTitlePropsType = {
  children: ReactNode;
};

export const FormTitle = ({ children }: FormTitlePropsType) => {
  return <Wrapper>{children}</Wrapper>;
};
