import styled from '@emotion/styled';
import { COLORS } from '@/styles/colors.tsx';

export const Wrapper = styled.footer({
  width: '100%',
  height: '40px',
  position: 'fixed',
  bottom: 0,
  borderTop: `1px solid ${COLORS.grey[300]}`,
  backgroundColor: COLORS.white,
});

export const FooterContent = styled.div({
  maxWidth: '1400px',
  height: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  padding: '0 16px',
});
