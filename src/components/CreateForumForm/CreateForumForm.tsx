import { Box } from '@/shared/ui/Box/Box.tsx';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createForumValidation } from '@/components/CreateForumForm/validation.ts';
import { FormProviderWrapper } from '@/shared/ui/form/FormProviderWrapper/FormProviderWrapper.tsx';
import { FormInput } from '@/shared/ui/form/FormInput/FormInput.tsx';
import { FormTextArea } from '@/shared/ui/form/FormTextArea/FormTextArea.tsx';
import { FormTitle } from '@/shared/ui/FormTitle/FormTitle.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { useCreateForumQuery } from '@/apiHooks/useCraeteForumQuery.ts';
import { CreateForumPayloadType } from '@/api/createNewForumApi.ts';

type CreateForumFormPropsType = {
  onClose: () => void;
};

export const CreateForumForm = ({ onClose }: CreateForumFormPropsType) => {
  const methods = useForm<FieldValues>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    resolver: yupResolver(createForumValidation),
    defaultValues: {
      title: '',
      comment: '',
    },
  });

  const { mutate } = useCreateForumQuery(onClose);

  const { handleSubmit } = methods;

  const onSubmit = (values: FieldValues) => {
    const payload: CreateForumPayloadType = {
      title: values.title,
      comment: values.comment,
    };

    mutate(payload);
  };

  return (
    <Box width='100%' display='flex' flexDirection='column' m={['40px', '0px']} rowGap='24px'>
      <Box width='100%' display='flex' justifyContent='center' alignItems='center'>
        <FormTitle>Создайте форум</FormTitle>
      </Box>

      <FormProviderWrapper
        methods={methods}
        onSubmit={handleSubmit((values) => {
          onSubmit(values);
        })}
      >
        <Box width='100%' display='flex' flexDirection='column' rowGap='6px'>
          <FormInput name='title' label='Название' placeholder='Введите название' />
          <FormTextArea name='comment' label='Комментарий' placeholder='Оставьте первый комментарий' />
        </Box>
        <Box width='100%' display='flex' justifyContent='space-between' columnGap='20px' mt='20px'>
          <Button onClick={onClose}>Закрыть</Button>
          <Button type='submit'>Создать</Button>
        </Box>
      </FormProviderWrapper>
    </Box>
  );
};
