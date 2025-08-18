import { useQuery } from '@tanstack/react-query';
import { getUsersApi } from '@/api/getUsersApi.ts';

export const useGetUsers = () => {
  return useQuery({
    queryKey: ['getUsers'],
    queryFn: getUsersApi,
  });
};
