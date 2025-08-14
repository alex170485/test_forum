import styled from '@emotion/styled';
import { BUTTON_SIZE_VARIANT, BUTTON_VARIANT } from './const.ts';

interface CustomButtonProps {
  size: keyof typeof BUTTON_SIZE_VARIANT;
  variant: keyof typeof BUTTON_VARIANT;
}

const BUTTON_WIDTH_MAP = {
  small: '100px',
  medium: '156px',
};

export const CustomButton = styled.button<CustomButtonProps>((props) => ({
  borderRadius: '12px',
  border: `1px solid black`,
  cursor: 'pointer',
  outline: 'none',
  display: 'flex',
  justifyContent: 'center',
  transition: 'all 0.2s ease-in-out 0s',
  width: `${BUTTON_WIDTH_MAP[props.size]}`,
  alignItems: 'center',
  // backgroundColor: `${COLORS_VARIANT[props.variant]}`,
  whiteSpace: 'nowrap',
  fontFamily: 'Montserrat-Regular, sans-serif',

  '&:hover': {
    opacity: 0.8,
  },

  // '&:disabled': {
  //   backgroundColor: COLORS.grey[200],
  //   color: COLORS.black,
  // },
}));
