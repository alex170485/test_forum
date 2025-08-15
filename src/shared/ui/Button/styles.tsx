import styled from '@emotion/styled';

export const CustomButton = styled.button({
  borderRadius: '12px',
  border: `1px solid black`,
  cursor: 'pointer',
  outline: 'none',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  transition: 'all 0.2s ease-in-out 0s',
  width: `100%`,
  alignItems: 'center',
  height: `30px`,
  whiteSpace: 'nowrap',
  fontFamily: 'Montserrat-Regular, sans-serif',
  backgroundColor: 'white',

  '&:hover': {
    opacity: 0.8,
  },
});
