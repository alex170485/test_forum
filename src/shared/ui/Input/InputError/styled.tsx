import emotionStyled from '@emotion/styled';
import { COLORS } from '@/styles/colors.tsx';

export const ErrorWrapper = emotionStyled.div({
  height: '12px',
});

export const ErrorMessage = emotionStyled.div({
  fontSize: '12px',
  color: COLORS.red,
});

export const AnimateFadeIn = emotionStyled.div`
  &.fade-enter {
    opacity: 0;
    transform: translateY(-8px);
  }

  &.fade-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 0.2s ease-out,
      transform 0.2s ease-out;
  }
`;
