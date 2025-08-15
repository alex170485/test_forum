import styled from '@emotion/styled';
import { COLORS } from '@/styles/colors.tsx';

type DrawerOverlayPropsType = {
  isOpen: boolean;
};

export const DrawerOverlay = styled.div<DrawerOverlayPropsType>((props) => ({
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  opacity: props.isOpen ? 1 : 0,
  visibility: props.isOpen ? 'visible' : 'hidden',
  backgroundColor: '#666f7880',
  transition: 'opacity 0.2s ease, visibility 0.2s ease',
  zIndex: 9999,
}));

export const DrawerWrapper = styled.div({
  position: 'fixed',
  top: 0,
  right: 0,
  backgroundColor: COLORS.white,
  padding: '16px',
  width: '400px',
  height: '100%',
  zIndex: 9999,

  '&.fade-enter': {
    opacity: 0,
    transform: 'translateX(100%)',
  },

  '&.fade-enter-active': {
    opacity: 1,
    transform: 'translateX(0)',
    transition: 'opacity 0.2s ease-in-out, transform 0.25s cubic-bezier(0, 0, 0.2, 1)',
  },

  '&.fade-exit': {
    opacity: 1,
    transform: 'translateX(100%)',
    transition: 'opacity 0.2s ease-in-out, transform 0.25s cubic-bezier(0, 0, 0.2, 1)',
  },
});

export const DrawerContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  height: '100%',
  position: 'relative',
});

export const ButtonWrapper = styled.div({
  position: 'absolute',
  right: 0,
});

export const CloseDrawerButton = styled.button({
  padding: 0,
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer',
});
