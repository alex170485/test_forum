import { SubTitle, Title, Wrapper} from '@/components/UserWidget/styled.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { ModalWindow } from '@/shared/ui/ModalWindow/ModalWindow.tsx';
import { useState } from 'react';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { LoginForm } from '@/components/LoginForm/LoginForm.tsx';
import { useUserContext } from '@/userContext.tsx';
import {Avatar} from "@/shared/ui/Avatar/Avatar.tsx";

export const UserWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useUserContext();
  const title = user?.nickname ? user.nickname : 'Гость';


  return (
    <>
      <Wrapper>
        <Avatar url={user?.avatarUrl}/>
        <Box display='flex' flexDirection='column' justifyContent='space-between'>
          <Title>{title}</Title>
          <SubTitle>Анонимный пользователь</SubTitle>
        </Box>
        {!user ? (
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Воити
          </Button>
        ) : (
          <Button onClick={logout}>Выйти</Button>
        )}
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
