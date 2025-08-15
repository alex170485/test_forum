import { ComponentPropsWithRef, ReactNode } from 'react';
import { CustomButton } from './styles.tsx';
import { Box } from '../Box/Box.tsx';

type ButtonPropsType = {
  children: ReactNode;
  isLoading?: boolean;
} & ComponentPropsWithRef<'button'>;

export const Button = ({ children, ...rest }: ButtonPropsType) => {
  return (
    <CustomButton {...rest}>
      <Box display='flex' alignItems='center' columnGap='8px'>
        {children}
      </Box>
    </CustomButton>
  );
};
