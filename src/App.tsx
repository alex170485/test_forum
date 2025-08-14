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

export const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route path={forumsPagePath()} element={<ForumsPage />} />
        <Route path={forumPagePath()} element={<ForumPage />} />
        <Route path={profilePagePath()} element={<ProfilePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
