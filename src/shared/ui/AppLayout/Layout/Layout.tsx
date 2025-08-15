import { ReactNode } from 'react';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Header } from '@/shared/ui/AppLayout/Layout/Header/Header.tsx';
import { Footer } from '@/shared/ui/AppLayout/Layout/Footer/Footer.tsx';
import { Main } from '@/shared/ui/AppLayout/Layout/styled.tsx';

type LayoutPropsType = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutPropsType) => {
  return (
    <Box width='100%' display='flex' flexDirection='column' position='relative' alignItems='center'>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Box>
  );
};
