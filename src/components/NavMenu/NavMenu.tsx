import { MenuListItem, MenuListWrapper, Wrapper } from '@/components/NavMenu/styles.tsx';

export const NavMenu = () => {
  return (
    <Wrapper>
      <MenuListWrapper>
        <MenuListItem>Мои форумы</MenuListItem>
        <MenuListItem>Все форумы</MenuListItem>
        <MenuListItem>Новое</MenuListItem>
        <MenuListItem>Популярное</MenuListItem>
      </MenuListWrapper>
    </Wrapper>
  );
};
