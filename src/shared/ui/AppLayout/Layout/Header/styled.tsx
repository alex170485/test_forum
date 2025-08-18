import styled from '@emotion/styled';
import { COLORS } from '@/styles/colors.tsx';

export const Wrapper = styled.header({
  width: '100%',
  height: '80px',
  position: 'fixed',
  top: '0',
  backgroundColor: COLORS.white,
  borderBottom: '1px solid #BDBDBD',
});

export const HeaderContent = styled.div({
  maxWidth: '1400px',
  height: '100%',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  padding: '0 16px',
  backgroundColor: COLORS.white,
});
