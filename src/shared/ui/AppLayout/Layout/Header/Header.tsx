import { HeaderContent, Wrapper } from '@/shared/ui/AppLayout/Layout/Header/styled.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { UserWidget } from '@/components/UserWidget/UserWidget.tsx';
import { NavMenu } from '@/components/NavMenu/NavMenu.tsx';
import { useState } from 'react';
import { Drawer } from '@/shared/ui/Drawer/Drawer.tsx';
import { EditProfileForm } from '@/components/EditProfileForm/EditProfileForm.tsx';
import { useUserContext } from '@/userContext.tsx';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUserContext();

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
        <EditProfileForm user={user} onClose={() => setIsOpen(false)} />
      </Drawer>
    </>
  );
};
