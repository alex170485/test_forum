import { useMutation, useQueryClient } from '@tanstack/react-query';
import { EditUserDetailsPayloadType, updateUserDetailsApi } from '@/api/updateUserDetailsApi.ts';
import { toast } from 'react-toastify';
import { UserType } from '@/types.ts';

export type AdminEditUserDetailsPayloadType = Omit<EditUserDetailsPayloadType, 'nickname' | 'description'>;
type ResponseType = {
  firstName: string;
  id: number;
  lastName: string;
  middleName: number;
};

export const useAdminEditUserDetailsQuery = (userId: string, onClose: () => void) => {
  const queryClient = useQueryClient();

  return useMutation<ResponseType, unknown, AdminEditUserDetailsPayloadType>({
    mutationKey: ['adminEditUserDetails', userId],
    mutationFn: (payload: AdminEditUserDetailsPayloadType) => updateUserDetailsApi(userId, payload),
    onSuccess: (response) => {
      queryClient.setQueryData(['getUsers'], (old: UserType[]) => {
        return old?.map((oldUser) => {
          if (oldUser?.id === response?.id) {
            return {
              ...oldUser,
              ...response,
            };
          }

          return oldUser;
        });
      });

      toast('Данные обновлены!');
      onClose();
    },
    onError: () => {
      throw new Error('Что то пошло не так');
    },
  });
};
