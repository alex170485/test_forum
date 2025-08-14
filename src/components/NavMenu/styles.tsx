import styled from '@emotion/styled';

export const Wrapper = styled.nav({
  display: 'flex',
  alignItems: 'center',
});

export const MenuListWrapper = styled.ul({
  display: 'flex',
  alignItems: 'center',
  columnGap: '20px',
});

export const MenuListItem = styled.li({
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'color 0.3s ease',

  '&:hover': {
    borderBottom: '1px solid blue',
  },
});
