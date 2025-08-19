import ApiService from '@/ApiService.ts';

export type EditUserDetailsPayloadType = {
  firstName: string;
  middleName?: string;
  lastName: string;
  nickname?: string;
  description?: string;
};

export const updateUserDetailsApi = async (userId: string, payload: EditUserDetailsPayloadType) => {
  const uri = `users/${userId}`;

  return ApiService.PUT(uri, payload);
};
