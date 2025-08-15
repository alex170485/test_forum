import ApiService from '@/ApiService.ts';
import { UserType } from '@/types.ts';

export const getUserApi = (id?: string) => {
  const uri = `users/${id}`;

  return ApiService.GET<UserType>(uri);
};
