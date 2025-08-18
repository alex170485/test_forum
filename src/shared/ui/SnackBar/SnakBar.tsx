import { ToastContainer } from 'react-toastify';

export const SnackBar = () => {
  return <ToastContainer theme='dark' position='top-right' autoClose={2000} draggable={false} closeButton={false} />;
};
