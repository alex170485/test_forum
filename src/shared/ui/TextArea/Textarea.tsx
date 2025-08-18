import { ComponentPropsWithRef, ReactNode } from 'react';
import { CharCountWrapper, CustomTextArea } from './styles.tsx';
import { InputError } from '@/shared/ui/Input/InputError/InputError.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Label } from '@/shared/ui/Input/styles.tsx';

export type TextAreaPropsType = {
  label?: ReactNode;
  placeholder?: string;
  hasErrorComponent?: boolean;
  error?: string;
  apiError?: string;
  disabled?: boolean;
  rows?: number;
} & ComponentPropsWithRef<'textarea'>;

export const TextArea = ({
  label,
  placeholder,
  error,
  apiError,
  hasErrorComponent = true,
  rows = 8,
  value,
  ...rest
}: TextAreaPropsType) => {
  const hasAnyError = !!error || !!apiError;
  const characterCount = value?.toString().length ?? 0;

  return (
    <Box display='flex' flexDirection='column' width='100%'>
      {label && (
        <Box mb='4px'>
          <Label>{label}</Label>
        </Box>
      )}
      <Box position='relative'>
        <CustomTextArea hasError={hasAnyError} rows={rows} placeholder={placeholder} value={value} {...rest} />
        <CharCountWrapper>{`${characterCount}/200`}</CharCountWrapper>
      </Box>
      {hasErrorComponent && <InputError error={error} apiError={apiError} />}
    </Box>
  );
};
