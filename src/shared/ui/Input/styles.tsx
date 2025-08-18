import { COLORS } from '@/styles/colors.tsx';
import styled from '@emotion/styled';

interface CustomInputPropsType {
  hasError: boolean;
}

export const CustomInput = styled.input<CustomInputPropsType>((props) => ({
  outline: 'none',
  width: '100%',
  height: '32px',
  padding: '8px 16px',
  border: props.hasError ? `1px solid ${COLORS.red}` : `1px solid ${COLORS.grey[200]}`,
  borderRadius: '8px',
  fontFamily: 'Montserrat-Regular, sans-serif',
  fontSize: '14px',

  '&:placeholder': {
    color: `${COLORS.grey[200]}`,
    fontFamily: 'Montserrat-Regular, sans-serif',
    fontSize: '14px',
  },

  '&:hover:not([disabled])': {
    border: `1px solid ${COLORS.blue[600]}`,
  },
}));

export const Label = styled.div({
  fontFamily: 'Montserrat-Regular, sans-serif',
  fontSize: '14px',
  fontWeight: 500,
});
