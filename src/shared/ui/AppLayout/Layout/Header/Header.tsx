import { HeaderContent, Wrapper } from '@/shared/ui/AppLayout/Layout/Header/styled.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { UserWidget } from '@/components/UserWidget/UserWidget.tsx';
import { NavMenu } from '@/components/NavMenu/NavMenu.tsx';
import { useState } from 'react';
import { Drawer } from '@/shared/ui/Drawer/Drawer.tsx';
import { EditUserDetailsForm } from '@/components/EditUserDetailsForm/EditUserDetailsForm.tsx';
import { localStorageService } from '@/helpers/localStorageService.ts';
import { USER_ID_KEY } from '@/types.ts';
import { useUserByIdQuery } from '@/apiHooks/useUserByIdQuery.ts';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userId = localStorageService.get(USER_ID_KEY);
  const { data: user } = useUserByIdQuery(userId);

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
        <EditUserDetailsForm user={user} onClose={() => setIsOpen(false)} />
      </Drawer>
    </>
  );
};
