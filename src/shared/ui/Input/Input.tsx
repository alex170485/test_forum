import { ComponentPropsWithRef, ReactNode } from 'react';
import { Box } from '../Box/Box';
import { CustomInput } from './styles';
import { InputError } from './InputError/InputError';

export type InputType = ComponentPropsWithRef<'input'> & {
  label?: ReactNode;
  placeholder?: string;
  hasErrorComponent?: boolean;
  error?: string;
  apiError?: string;
  disabled?: boolean;
};

export const Input = ({
  label,
  placeholder,
  hasErrorComponent = true,
  error,
  apiError,
  disabled,
  ...rest
}: InputType) => {
  const hasAnyError = !!error || !!apiError;

  return (
    <Box display='flex' flexDirection='column' width='100%'>
      {label && (
        <Box display='flex' justifyContent='start' mb='4px' columnGap='4px'>
          {label}
        </Box>
      )}
      <Box position='relative'>
        <CustomInput
          placeholder={placeholder}
          hasError={hasAnyError}
          disabled={disabled}
          autoComplete='off'
          {...rest}
        />
      </Box>
      {hasErrorComponent && <InputError error={error} apiError={apiError} />}
    </Box>
  );
};
