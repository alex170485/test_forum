import { useController, useFormContext } from 'react-hook-form';
import { TextArea, TextAreaPropsType } from '@/shared/ui/TextArea/Textarea.tsx';

type FormTextAreaPropsType = {
  name: string;
  apiError?: string | null;
} & TextAreaPropsType;

export const FormTextArea = ({
  name,
  label,
  placeholder,
  hasErrorComponent,
  rows,
  apiError,
  ...rest
}: FormTextAreaPropsType) => {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <TextArea
      {...field}
      label={label}
      placeholder={placeholder}
      error={error?.message}
      hasErrorComponent={hasErrorComponent}
      apiError={apiError}
      rows={rows}
      {...rest}
    />
  );
};
