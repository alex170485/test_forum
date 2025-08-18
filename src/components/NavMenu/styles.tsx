import styled from '@emotion/styled';
import { COLORS } from '@/styles/colors.tsx';
import { MENU_ITEM_MAP, MenuItemType, USER_ROLE_MAP, UserRoleType } from '@/types.ts';

const getCurrentTransform = (activeItem: MenuItemType, role?: UserRoleType) => {
  if (role === USER_ROLE_MAP.ADMIN) {
    if (activeItem === MENU_ITEM_MAP.PROFILE) {
      return 'translateX(100%)';
    }

    if (activeItem === MENU_ITEM_MAP.DASHBOARD) {
      return 'translateX(200%)';
    }
  }

  if (role === USER_ROLE_MAP.USER) {
    if (activeItem === MENU_ITEM_MAP.MY_FORUM) {
      return 'translateX(100%)';
    }

    if (activeItem === MENU_ITEM_MAP.PROFILE) {
      return 'translateX(200%)';
    }
  }

  return 'translateX(0%)';
};

export const Wrapper = styled.nav({
  display: 'flex',
  alignItems: 'center',
});

export const MenuListWrapper = styled.ul({
  display: 'grid',
  gridTemplateColumns: `repeat(3, 1fr)`,
  alignItems: 'center',
  columnGap: '20px',
  position: 'relative',
});

export const MenuListItem = styled.li({
  display: 'flex',
  justifyContent: 'center',
  flexShrink: 0,
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  position: 'relative',
  zIndex: 1,
  padding: '4px 8px',
});

export const CoveringBlock = styled.div<{ activeItem: MenuItemType; role?: UserRoleType }>((props) => ({
  position: 'absolute',
  opacity: '0.2',
  width: 'calc(100% / 3)',
  height: '100%',
  backgroundColor: COLORS.grey[200],
  borderRadius: '6px',
  padding: '4px',
  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: `${getCurrentTransform(props.activeItem, props.role)}`,
}));
