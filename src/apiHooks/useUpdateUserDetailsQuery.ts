import { updateUserDetailsApi, UpdateUserDetailsPayloadType } from '@/api/updateUserDetailsApi.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { UserType } from '@/types.ts';

type ResponseType = {
  description: string;
  firstName: string;
  id: number;
  lastName: string;
  middleName: string;
  nickname: string;
};

export const useUpdateUserDetailsQuery = (userId: string, onClose: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, unknown, UpdateUserDetailsPayloadType>({
    mutationKey: ['updateUserDetails', userId],
    mutationFn: (payload: UpdateUserDetailsPayloadType) => updateUserDetailsApi(userId as string, payload),
    onSuccess: (response) => {
      queryClient.setQueryData(['getUser', parseInt(userId)], (old: UserType) => ({ ...old, ...response }));

      toast('Данные обновлены!');
      onClose();
    },
    onError: () => {
      throw new Error('Что то пошло не так');
    },
  });
};
