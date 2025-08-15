import { HeaderContent, Wrapper } from '@/shared/ui/AppLayout/Layout/Header/styled.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { UserWidget } from '@/components/UserWidget/UserWidget.tsx';
import { NavMenu } from '@/components/NavMenu/NavMenu.tsx';
import { useState } from 'react';
import { Drawer } from '@/shared/ui/Drawer/Drawer.tsx';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Wrapper>
        <HeaderContent>
          <Box width='100%' display='flex' alignItems='center' justifyContent='space-between' columnGap='8px'>
            <NavMenu onOpen={() => setIsOpen(true)} />
            <UserWidget />
          </Box>
        </HeaderContent>
      </Wrapper>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        1212121
      </Drawer>
    </>
  );
};
