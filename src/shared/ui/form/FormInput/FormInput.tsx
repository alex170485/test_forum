import { useController, useFormContext } from 'react-hook-form';
import { Input, InputType } from '@/shared/ui/Input/Input.tsx';

type FormInputType = {
  name: string;
  apiError?: string | null;
} & InputType;

export const FormInput = ({
  name,
  label,
  placeholder,
  hasErrorComponent,
  apiError,
  disabled,
  ...rest
}: FormInputType) => {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <Input
      {...field}
      label={label}
      placeholder={placeholder}
      error={error?.message}
      hasErrorComponent={hasErrorComponent}
      apiError={apiError}
      disabled={disabled}
      {...rest}
    />
  );
};
