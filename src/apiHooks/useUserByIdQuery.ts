import { useQuery } from '@tanstack/react-query';
import { getUserApi } from '@/api/getUserApi.ts';

export const useUserByIdQuery = (id: string) => {
  return useQuery({
    queryKey: ['getUser', id],
    queryFn: () => getUserApi(id as string),
    enabled: !!id,
  });
};
