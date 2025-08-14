import styled from '@emotion/styled';

export const Overlay = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'fixed',
  backdropFilter: 'blur(1.5px)',
  top: 0,
  left: 0,
  right: 0,
  height: '100%',
  minHeight: '100%',
  maxHeight: 'max-content',
  overflow: 'auto',
  zIndex: 999,
});

export const Wrapper = styled.div({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
});
