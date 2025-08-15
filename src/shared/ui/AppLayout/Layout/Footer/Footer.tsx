import { FooterContent, Wrapper } from '@/shared/ui/AppLayout/Layout/Footer/styled.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';

export const Footer = () => {
  return (
    <Wrapper>
      <FooterContent>
        <Box display='flex' alignItems='center'>
          Footer
        </Box>
      </FooterContent>
    </Wrapper>
  );
};
