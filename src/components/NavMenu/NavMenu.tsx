import { MenuListItem, MenuListWrapper, Wrapper } from '@/components/NavMenu/styles.tsx';
import { createSearchParams, useNavigate } from 'react-router';
import { forumsPagePath } from '@/bundle/ForumsPage/path.ts';
import { useUserContext } from '@/userContext.tsx';

type ForumsSortType = 'new' | 'popular';
type NavMenuPropsType = {
  onOpen: () => void;
};

export const NavMenu = ({ onOpen }: NavMenuPropsType) => {
  const navigate = useNavigate();
  const { isUser, isAdmin } = useUserContext();

  const navigateToForums = (forumsSort?: ForumsSortType) => {
    navigate({
      pathname: forumsPagePath(),
      search:
        forumsSort &&
        createSearchParams({
          sort: `${forumsSort}`,
        }).toString(),
    });
  };

  return (
    <Wrapper>
      <MenuListWrapper>
        <MenuListItem onClick={() => navigateToForums()}>Все форумы</MenuListItem>
        <MenuListItem onClick={() => navigateToForums('new')}>Новое</MenuListItem>
        <MenuListItem onClick={() => navigateToForums('popular')}>Популярное</MenuListItem>
        {isUser && <MenuListItem>Мои форумы</MenuListItem>}
        {(isUser || isAdmin) && <MenuListItem onClick={onOpen}>Профаил</MenuListItem>}
        {isAdmin && <MenuListItem>Админка</MenuListItem>}
      </MenuListWrapper>
    </Wrapper>
  );
};
