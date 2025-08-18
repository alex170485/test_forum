import { urlHelper } from '@/helpers/urlHelper.tsx';

export const getAdminDashboardPath = () => {
  return urlHelper('/admin/dashboard');
};
