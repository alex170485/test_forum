import ApiService from '@/ApiService.ts';
import { ForumType } from '@/types.ts';

export const getAllForumsApi = () => {
  const uri = 'forums';

  return ApiService.GET<ForumType[]>(uri);
};
