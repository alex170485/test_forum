import { HeaderContent, Wrapper } from '@/shared/ui/AppLayout/Layout/Header/styled.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { UserWidget } from '@/components/UserWidget/UserWidget.tsx';
import { NavMenu } from '@/components/NavMenu/NavMenu.tsx';

export const Header = () => {
  return (
    <Wrapper>
      <HeaderContent>
        <Box display='flex' alignItems='center' columnGap='8px'>
          <UserWidget />
          <NavMenu />
        </Box>
      </HeaderContent>
    </Wrapper>
  );
};
