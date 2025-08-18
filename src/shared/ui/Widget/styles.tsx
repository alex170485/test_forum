import styled from '@emotion/styled';
import { COLORS } from '@/styles/colors.tsx';

export const Wrapper = styled.div({
  width: '100%',
  display: 'flex',
  border: `1px solid ${COLORS.grey[600]}`,
  borderRadius: '12px',
  padding: '12px',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: 'rgba(19, 62, 112, 0.2) 0px 2px 10px;',
  },
});
