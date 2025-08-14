import { Route, Routes } from 'react-router';
import { MainPage } from '@/bundle/MainPage/MainPage.tsx';
import { NotFoundPage } from '@/bundle/NotFoundPage/NotFoundPage.tsx';
import { AppLayout } from '@/shared/ui/AppLayout/AppLayout.tsx';

export const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
