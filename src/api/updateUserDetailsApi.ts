import ApiService from '@/ApiService.ts';

export type UpdateUserDetailsPayloadType = {
  firstName: string;
  middleName?: string;
  lastName: string;
  nickname: string;
  description?: string;
};

export const updateUserDetailsApi = async (userId: string, payload: UpdateUserDetailsPayloadType) => {
  const uri = `users/${userId}`;

  return ApiService.PUT(uri, payload);
};
