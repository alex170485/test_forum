import styled from '@emotion/styled';
import { COLORS } from '@/styles/colors.tsx';

interface CustomTextAreaProps {
  hasError: boolean;
}

export const CustomTextArea = styled.textarea<CustomTextAreaProps>((props) => ({
  outline: 'none',
  width: '100%',
  padding: '8px 16px',
  border: props.hasError ? `1px solid ${COLORS.red}` : `1px solid ${COLORS.grey[200]}`,
  backgroundColor: 'transparent',
  borderRadius: '16px',
  position: 'relative',
  resize: 'none',
  fontFamily: 'Montserrat-Regular, sans-serif',
  fontSize: '14px',

  '&:placeholder': {
    fontSize: '14px',
    color: `${COLORS.grey[200]}`,
  },

  '&:hover:not([disabled])': {
    border: `1px solid ${COLORS.blue[600]}`,
  },

  '&:focus:not([disabled])': {
    border: `1px solid ${COLORS.blue[600]}`,
  },
}));

export const CharCountWrapper = styled.div({
  position: 'absolute',
  right: '16px',
  bottom: '8px',
  fontFamily: 'Montserrat-Regular, sans-serif',
  fontSize: '12px',
});
