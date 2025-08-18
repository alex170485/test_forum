import { SubTitle, Title, Wrapper } from '@/components/UserWidget/styled.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { ModalWindow } from '@/shared/ui/ModalWindow/ModalWindow.tsx';
import { useEffect, useState } from 'react';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { LoginForm } from '@/components/LoginForm/LoginForm.tsx';
import { Avatar } from '@/shared/ui/Avatar/Avatar.tsx';
import { useUserByIdQuery } from '@/apiHooks/useUserByIdQuery.ts';
import { localStorageService } from '@/helpers/localStorageService.ts';
import { useQueryClient } from '@tanstack/react-query';
import { USER_ID_KEY } from '@/types.ts';
import { useUserContext } from '@/userContext.tsx';

export const UserWidget = () => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const { setUserData, removeUserData } = useUserContext();

  const userId = localStorageService.get(USER_ID_KEY);
  const { data: user } = useUserByIdQuery(userId);

  const title = user?.nickname ? user.nickname : 'Гость';
  const subTitle = user?.level ? user?.level : 'Анонимный пользователь';

  const logout = () => {
    localStorageService.remove(USER_ID_KEY);
    removeUserData();
    queryClient.resetQueries({ queryKey: ['getUser', userId] });
  };

  useEffect(() => {
    const currentUserId = localStorageService.get(USER_ID_KEY);

    if (user?.id && currentUserId !== user?.id) {
      localStorageService.set(USER_ID_KEY, user?.id);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  return (
    <>
      <Wrapper>
        <Box display='flex' alignItems='center' columnGap='8px'>
          <Avatar avatarUrl={user?.avatarUrl} />
          <Box display='flex' flexDirection='column' justifyContent='space-between'>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </Box>
        </Box>
        <Box width='100px'>
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
        </Box>
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
