import { localStorageService } from '@/helpers/localStorageService.ts';
import { USER_ID_KEY } from '@/types.ts';
import { Navigate, Outlet } from 'react-router';

export const ProtectedRoute = () => {
  const userId = localStorageService.get(USER_ID_KEY);

  if (userId) {
    return <Outlet />;
  } else {
    return <Navigate to={'/'} />;
  }
};
