import { useRef } from 'react';
import { AnimateFadeIn, ErrorMessage, ErrorWrapper } from './styled';
import { CSSTransition } from 'react-transition-group';

type InputErrorType = {
  error?: string;
  apiError?: string;
};

export const InputError = ({ error, apiError }: InputErrorType) => {
  const nodeRef = useRef(null);
  const hasAnyError = !!error || !!apiError;

  return (
    <ErrorWrapper>
      <CSSTransition in={hasAnyError} nodeRef={nodeRef} classNames='fade' timeout={200} unmountOnExit>
        <AnimateFadeIn ref={nodeRef}>
          <ErrorMessage>{error || apiError}</ErrorMessage>
        </AnimateFadeIn>
      </CSSTransition>
    </ErrorWrapper>
  );
};
