import { Layout } from '@/shared/ui/AppLayout/Layout/Layout.tsx';
import { Outlet } from 'react-router';

export const AppLayout = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
