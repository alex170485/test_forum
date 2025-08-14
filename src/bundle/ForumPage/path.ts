import { urlHelper } from '@/helpers/urlHelper.tsx';

export const forumPagePath = (id: string = ':id') => {
  return urlHelper(`/forum/${id}`);
};
