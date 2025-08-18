import { UserType } from '@/types.ts';
import { AllUsersBlockWrapper } from '@/bundle/AdminDashboardPage/styled.tsx';
import { UserCard } from '@/bundle/AdminDashboardPage/ui/UserCard.tsx';
import { useState } from 'react';
import { Drawer } from '@/shared/ui/Drawer/Drawer.tsx';
import { EditProfileForm } from '@/components/EditProfileForm/EditProfileForm.tsx';
import { useUserByIdQuery } from '@/apiHooks/useUserByIdQuery.ts';

type AllUsersBlockPropsType = {
  users?: UserType[];
};

export const AllUsersBlock = ({ users }: AllUsersBlockPropsType) => {
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  const { data, isLoading } = useUserByIdQuery(String(userId));

  const openDrawer = (id: number) => {
    setUserId(id);
    setIsOpenEditForm(true);
  };
  const closeDrawer = () => {
    setIsOpenEditForm(false);
  };

  return (
    <>
      <AllUsersBlockWrapper>
        {users?.map((user: UserType) => {
          return <UserCard key={user?.id} user={user} onClick={openDrawer} />;
        })}
      </AllUsersBlockWrapper>
      <Drawer isOpen={isOpenEditForm} onClose={closeDrawer}>
        <EditProfileForm user={data as UserType} onClose={closeDrawer} isLoading={isLoading} />
      </Drawer>
    </>
  );
};
