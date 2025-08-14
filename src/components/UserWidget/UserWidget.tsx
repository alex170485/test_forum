import { SubTitle, Title, Wrapper } from '@/components/UserWidget/styled.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';

export const UserWidget = () => {
  return (
    <Wrapper>
      <div>23232</div>
      <Box display='flex' flexDirection='column' justifyContent='space-between'>
        <Title>Гость</Title>
        <SubTitle>Анонимный пользователь</SubTitle>
      </Box>
      <button>Воити</button>
    </Wrapper>
  );
};
