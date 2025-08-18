import { useUserByIdQuery } from '@/ApiHooks/useUserByIdQuery.ts';
import { localStorageService } from '@/helpers/localStorageService.ts';
import { USER_ID_KEY, USER_ROLE_MAP } from '@/types.ts';
import { Navigate, Outlet } from 'react-router';

export const AdminProtectedRoute = () => {
  const userId = localStorageService.get(USER_ID_KEY);

  const { data } = useUserByIdQuery(userId);

  const isAdmin = data?.role === USER_ROLE_MAP.ADMIN;

  if (isAdmin) {
    return <Outlet />;
  } else {
    return <Navigate to={'/'} />;
  }
};
