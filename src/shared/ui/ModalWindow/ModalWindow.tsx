import { ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import { Overlay, Wrapper } from './styles.tsx';

type ModalWindowPropsType = {
  isOpen: boolean;
  children: ReactNode;
};

export const ModalWindow = ({ isOpen, children }: ModalWindowPropsType) => {
  const ref = useRef<HTMLDivElement | null>(null);

  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return createPortal(
    <CSSTransition in={isOpen} nodeRef={ref} timeout={{ enter: 150, exit: 0 }} classNames='fade' unmountOnExit>
      <Overlay>
        <Wrapper>{children}</Wrapper>
      </Overlay>
    </CSSTransition>,
    document.getElementById('modal')!
  );
};
