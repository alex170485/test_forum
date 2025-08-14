import { SubTitle, Title, Wrapper } from '@/components/UserWidget/styled.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { ModalWindow } from '@/shared/ui/ModalWindow/ModalWindow.tsx';
import { useState } from 'react';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { LoginForm } from '@/components/LoginForm/LoginForm.tsx';

export const UserWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Wrapper>
        <div>23232</div>
        <Box display='flex' flexDirection='column' justifyContent='space-between'>
          <Title>Гость</Title>
          <SubTitle>Анонимный пользователь</SubTitle>
        </Box>
        <Button
          variant='primary'
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Воити
        </Button>
      </Wrapper>
      <ModalWindow isOpen={isOpen}>
        <LoginForm
          onClose={() => {
            setIsOpen(false);
          }}
        />
      </ModalWindow>
    </>
  );
};
