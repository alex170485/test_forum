import ApiService from '@/ApiService.ts';

export type CreateForumPayloadType = {
  title: string;
  comment?: string;
};

export const createForumApi = (payload: CreateForumPayloadType) => {
  const uri = '/forums';

  return ApiService.POST(uri, payload);
};
