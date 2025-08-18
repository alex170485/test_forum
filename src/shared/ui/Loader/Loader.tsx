import { Box } from '../Box/Box';
import { LoaderBase, LoaderChild } from './styles';

export const Loader = () => {
  return (
    <Box width='100%' height='400px' display='flex' justifyContent='center' alignItems='center'>
      <Box width='100%' height='400px' display='flex' justifyContent='center' alignItems='center'>
        <LoaderBase>
          <LoaderChild />
          <LoaderChild />
          <LoaderChild />
        </LoaderBase>
      </Box>
    </Box>
  );
};
