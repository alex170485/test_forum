import { ReactNode, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ButtonWrapper, CloseDrawerButton, DrawerContent, DrawerOverlay, DrawerWrapper } from './styles.tsx';

type DrawerType = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const ESCAPE_KEY = 'Escape';

export const Drawer = ({ isOpen, onClose, children }: DrawerType) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === ESCAPE_KEY) {
        onClose?.();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    window.addEventListener('keydown', keyDownHandler);

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CSSTransition in={isOpen} nodeRef={nodeRef} timeout={{ enter: 225, exit: 300 }} unmountOnExit classNames='fade'>
      <>
        <DrawerOverlay isOpen={isOpen} />
        <DrawerWrapper ref={nodeRef}>
          <DrawerContent>
            <ButtonWrapper onClick={onClose}>
              <CloseDrawerButton>Закрыть</CloseDrawerButton>
            </ButtonWrapper>
            {children}
          </DrawerContent>
        </DrawerWrapper>
      </>
    </CSSTransition>
  );
};
