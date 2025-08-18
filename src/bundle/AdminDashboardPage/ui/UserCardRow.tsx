import { Box } from '@/shared/ui/Box/Box.tsx';
import { ReactNode } from 'react';
import { UserCardRowChildren, UserCardRowTitle } from '@/bundle/AdminDashboardPage/ui/styled.tsx';

type UserCardRowPropsType = {
  title: string;
  children: ReactNode;
};

export const UserCardRow = ({ title, children }: UserCardRowPropsType) => {
  return (
    <Box display='flex' alignItems='center' justifyContent='space-between'>
      <UserCardRowTitle>{title}</UserCardRowTitle>
      <UserCardRowChildren>{children}</UserCardRowChildren>
    </Box>
  );
};
