import styled from '@emotion/styled';
import { COLORS } from '@/styles/colors.tsx';

export const Wrapper = styled.div({
  position: 'relative',
  display: 'flex',
  width: '100%',
});

export const SideBarMenuWrapper = styled.div({
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '8px',
  padding: '8px',
  border: `1px solid ${COLORS.grey[400]}`,
  borderRadius: '8px',
});

export const SideBarMenuItem = styled.div({
  fontSize: '14px',
  fontWeight: 'medium',
  cursor: 'pointer',

  '&:hover': {
    fontWeight: 'bold',
  },
});

export const AllUsersBlockWrapper = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '16px',
});
