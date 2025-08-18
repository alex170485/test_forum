import styled from '@emotion/styled';
import { COLORS } from '@/styles/colors.tsx';
import { keyframes } from '@emotion/react';

const rotateOne = keyframes({
  '0%': {
    transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(0deg)',
  },
  '100%': {
    transform: 'rotateX(35deg) rotateY(-45deg) rotateZ(360deg)',
  },
});

const rotateTwo = keyframes({
  '0%': {
    transform: 'rotateX(50deg) rotateY(10deg) rotateZ(0deg)',
  },
  '100%': {
    transform: 'rotateX(50deg) rotateY(10deg) rotateZ(360deg)',
  },
});

const rotateThree = keyframes({
  '0%': {
    transform: 'rotateX(35deg) rotateY(55deg) rotateZ(0deg)',
  },
  '100%': {
    transform: 'rotateX(35deg) rotateY(55deg) rotateZ(360deg)',
  },
});

export const LoaderBase = styled.div({
  position: 'relative',
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  perspective: '800px',
  color: `${COLORS.white}`,
});

export const LoaderChild = styled.div({
  position: 'absolute',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  borderRadius: '50%',

  '&:nth-of-type(1)': {
    borderBottom: `3px solid ${COLORS.grey[400]}`,
    animation: `${rotateOne} 1s linear infinite`,
  },

  '&:nth-of-type(2)': {
    borderRight: `3px solid ${COLORS.grey[400]}`,
    animation: `${rotateTwo} 1s linear infinite`,
  },

  '&:nth-of-type(3)': {
    borderTop: `3px solid ${COLORS.grey[400]}`,
    animation: `${rotateThree} 1s linear infinite`,
  },
});
