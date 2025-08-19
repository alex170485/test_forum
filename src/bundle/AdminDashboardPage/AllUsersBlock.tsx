import { UserType } from '@/types.ts';
import { AllUsersBlockWrapper } from '@/bundle/AdminDashboardPage/styled.tsx';
import { UserCard } from '@/bundle/AdminDashboardPage/ui/UserCard.tsx';
import { useState } from 'react';
import { Drawer } from '@/shared/ui/Drawer/Drawer.tsx';
import { useUserByIdQuery } from '@/apiHooks/useUserByIdQuery.ts';
import { AdminEditUserDetailsForm } from '@/components/AdminEditUserDetailsForm/AdminEditUserDetailsForm.tsx';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';

type AllUsersBlockPropsType = {
  users?: UserType[];
  isLoading: boolean;
};

export const AllUsersBlock = ({ users, isLoading }: AllUsersBlockPropsType) => {
  const [isOpenEditForm, setIsOpenEditForm] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  const { data, isLoading: isLoadingUser } = useUserByIdQuery(String(userId));

  const openDrawer = (id: number) => {
    setUserId(id);
    setIsOpenEditForm(true);
  };
  const closeDrawer = () => {
    setIsOpenEditForm(false);
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <AllUsersBlockWrapper>
        {users?.map((user: UserType) => {
          return <UserCard key={user?.id} user={user} onClick={openDrawer} />;
        })}
      </AllUsersBlockWrapper>
      <Drawer isOpen={isOpenEditForm} onClose={closeDrawer}>
        <AdminEditUserDetailsForm user={data} onClose={closeDrawer} isLoading={isLoadingUser} />
      </Drawer>
    </>
  );
};
