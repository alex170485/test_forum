import { USER_ROLE_TRANSLATE_MAP, USER_STATUS_TRANSLATE_MAP, UserType } from '@/types.ts';
import { Widget } from '@/shared/ui/Widget/Widget.tsx';
import { Avatar } from '@/shared/ui/Avatar/Avatar.tsx';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { UserCardRow } from '@/bundle/AdminDashboardPage/ui/UserCardRow.tsx';

type UserCard = {
  user?: UserType;
  onClick: (id: number) => void;
};

export const UserCard = ({ user, onClick }: UserCard) => {
  if (!user) return null;

  const currentRole = USER_ROLE_TRANSLATE_MAP[user?.role];
  const currentStatus = USER_STATUS_TRANSLATE_MAP[user?.status];

  return (
    <Widget onClick={() => onClick(user?.id)}>
      <Box width='100%' display='flex' flexDirection='column'>
        <Box width='100%' display='flex' justifyContent='center' alignItems='center'>
          <Avatar avatarUrl={user?.avatarUrl} size='medium' />
        </Box>
        <Box display='flex' flexDirection='column' justifyContent='space-between'>
          <UserCardRow title='Имя'>{user?.firstName}</UserCardRow>
          <UserCardRow title='Отчество'>{user?.middleName || '-'}</UserCardRow>
          <UserCardRow title='Фамилия'>{user?.lastName || '-'}</UserCardRow>
          <UserCardRow title='Ник нейм'>{user?.nickname || '-'}</UserCardRow>
          <UserCardRow title='Статус'>{currentStatus}</UserCardRow>
          <UserCardRow title='Роль'>{currentRole}</UserCardRow>
          <UserCardRow title='Уровень'>{user?.level || '-'}</UserCardRow>
        </Box>
      </Box>
    </Widget>
  );
};
