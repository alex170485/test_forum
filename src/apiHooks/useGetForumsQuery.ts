import { useQuery } from '@tanstack/react-query';
import { getAllForumsApi } from '@/api/getAllForumsApi.ts';

export const useGetForums = () => {
  return useQuery({
    queryKey: ['getForums'],
    queryFn: getAllForumsApi,
  });
};
