import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createForumApi, CreateForumPayloadType } from '@/api/createNewForumApi.ts';
import { ForumType, USER_ID_KEY } from '@/types.ts';
import { localStorageService } from '@/helpers/localStorageService.ts';
import { useUserByIdQuery } from '@/apiHooks/useUserByIdQuery.ts';
import { toast } from 'react-toastify';

type ResponseType = {
  comment: string;
  id: number;
  title: string;
};

export const useCreateForumQuery = (onClose: () => void) => {
  const queryClient = useQueryClient();

  const userId = localStorageService.get(USER_ID_KEY);
  const { data: user } = useUserByIdQuery(userId);

  return useMutation<ResponseType, unknown, CreateForumPayloadType>({
    mutationKey: ['createForum'],
    mutationFn: (payload: CreateForumPayloadType) => createForumApi(payload),
    onSuccess: (response) => {
      // MOCK DATA
      const newForum: ForumType = {
        id: response?.id,
        title: response?.title,
        author: {
          id: userId,
          date: '22-03-2025',
          nickname: user?.nickname ? user?.nickname : '',
          avatarUrl: user?.avatarUrl ? user?.avatarUrl : '',
        },
        ordering: '1',
        status: 'new',
        posts: [
          {
            id: 1,
            message: response?.comment,
            author: {
              id: userId,
              date: '22-03-2025',
              nickname: user?.nickname ? user?.nickname : '',
              avatarUrl: user?.avatarUrl ? user?.avatarUrl : '',
            },
            like: '0',
          },
        ],
      };

      queryClient.setQueryData(['getForums'], (old: ForumType[]) => [...old, newForum]);
      toast('Форум создан!');
      onClose();
    },
    onError: () => {
      throw new Error('Что то пошло не так');
    },
  });
};
