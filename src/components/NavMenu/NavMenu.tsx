import { CoveringBlock, MenuListItem, MenuListWrapper, Wrapper } from '@/components/NavMenu/styles.tsx';
import { useNavigate } from 'react-router';
import { useUserContext } from '@/userContext.tsx';
import { useEffect, useState } from 'react';
import { MENU_ITEM_MAP, MenuItemType } from '@/types.ts';
import { getAdminDashboardPath } from '@/bundle/AdminDashboardPage/path.ts';

type NavMenuPropsType = {
  onOpen: () => void;
};

export const NavMenu = ({ onOpen }: NavMenuPropsType) => {
  const navigate = useNavigate();
  const { isUser, isAdmin, user } = useUserContext();
  const [isActiveMenu, setIsActiveMenu] = useState<MenuItemType>(MENU_ITEM_MAP.ALL);

  const toAllForums = () => {
    setIsActiveMenu(MENU_ITEM_MAP.ALL);
    navigate('/');
  };

  const toDashboard = () => {
    setIsActiveMenu(MENU_ITEM_MAP.DASHBOARD);
    navigate(getAdminDashboardPath());
  };

  const toProfile = () => {
    setIsActiveMenu(MENU_ITEM_MAP.PROFILE);
    onOpen();
  };

  useEffect(() => {
    if (!user) setIsActiveMenu(MENU_ITEM_MAP.ALL);
  }, [user]);

  return (
    <Wrapper>
      <MenuListWrapper>
        <CoveringBlock role={user?.role} activeItem={isActiveMenu} />
        <MenuListItem onClick={toAllForums}>Все форумы</MenuListItem>
        {isUser && <MenuListItem>Мои форумы</MenuListItem>}
        {(isUser || isAdmin) && <MenuListItem onClick={toProfile}>Профаил</MenuListItem>}
        {isAdmin && <MenuListItem onClick={toDashboard}>Админка</MenuListItem>}
      </MenuListWrapper>
    </Wrapper>
  );
};
