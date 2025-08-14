import { ComponentPropsWithRef, ReactNode } from 'react';
import { BUTTON_SIZE_VARIANT, BUTTON_VARIANT } from './const.ts';
import { CustomButton } from './styles.tsx';
import { Box } from '../Box/Box.tsx';

type ButtonPropsType = {
  size?: keyof typeof BUTTON_SIZE_VARIANT;
  variant: keyof typeof BUTTON_VARIANT;
  type?: 'button' | 'reset' | 'submit';
  children: ReactNode;
  isLoading?: boolean;
  mobileStretch?: boolean;
} & ComponentPropsWithRef<'button'>;

export const Button = ({
  size = 'medium',
  variant,
  type = 'button',
  mobileStretch = false,
  children,
  ...rest
}: ButtonPropsType) => {
  return (
    <CustomButton size={size} variant={variant} type={type} {...rest}>
      <Box display='flex' alignItems='center' columnGap='8px'>
        {children}
      </Box>
    </CustomButton>
  );
};
