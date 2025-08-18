import { Route, Routes } from 'react-router';
import { MainPage } from '@/bundle/MainPage/MainPage.tsx';
import { NotFoundPage } from '@/bundle/NotFoundPage/NotFoundPage.tsx';
import { AppLayout } from '@/shared/ui/AppLayout/AppLayout.tsx';
import { forumsPagePath } from '@/bundle/ForumsPage/path.ts';
import { ForumsPage } from '@/bundle/ForumsPage/ForumsPage.tsx';
import { forumPagePath } from '@/bundle/ForumPage/path.ts';
import { ForumPage } from '@/bundle/ForumPage/ForumPage.tsx';
import { profilePagePath } from '@/bundle/ProfilePage/path.ts';
import { ProfilePage } from '@/bundle/ProfilePage/ProfilePage.tsx';
import { ProtectedRoute } from '@/routes/ProtectedRoute.tsx';
import { AdminProtectedRoute } from '@/routes/AdminProtectedRoute.tsx';
import { getAdminDashboardPath } from '@/bundle/AdminDashboardPage/path.ts';
import { AdminDashboardPage } from '@/bundle/AdminDashboardPage/AdminDashboardPage.tsx';

export const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route path={forumsPagePath()} element={<ForumsPage />} />
        <Route path={forumPagePath()} element={<ForumPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path={profilePagePath()} element={<ProfilePage />} />
          <Route element={<AdminProtectedRoute />}>
            <Route path={getAdminDashboardPath()} element={<AdminDashboardPage />} />
          </Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
