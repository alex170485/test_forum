import {useState} from "react";
import {SideBarMenuItem, SideBarMenuWrapper, Wrapper} from "@/bundle/AdminDashboardPage/styled.tsx";
import {Box} from "@/shared/ui/Box/Box.tsx";
import {AllUsersBlock} from "@/bundle/AdminDashboardPage/AllUsersBlock.tsx";
import {DASHBOARD_SIDE_MENU_ITEM_TYPE, DashboardSideMenuItemType} from "@/types.ts";
import {useGetUsers} from "@/apiHooks/useGetUsersQuery.ts";

export const AdminDashboardPage = () => {
  const [dashboardItemType, setDashboardItemType] = useState<DashboardSideMenuItemType>(DASHBOARD_SIDE_MENU_ITEM_TYPE.USERS)

  const changeDashboards = (item: DashboardSideMenuItemType) => {
    setDashboardItemType(item);
  }

  const {data: users} = useGetUsers()

  return (
    <Wrapper>
      <Box position="relative">
        <SideBarMenuWrapper>
          <SideBarMenuItem onClick={() => changeDashboards(DASHBOARD_SIDE_MENU_ITEM_TYPE.USERS)}>Пользователи</SideBarMenuItem>
          <SideBarMenuItem onClick={() => changeDashboards(DASHBOARD_SIDE_MENU_ITEM_TYPE.FORUMS)}>Все форумы</SideBarMenuItem>
        </SideBarMenuWrapper>
      </Box>

      <Box width='100%' ml='200px'>
        {dashboardItemType === DASHBOARD_SIDE_MENU_ITEM_TYPE.USERS && <AllUsersBlock users={users}/>}
        {dashboardItemType === DASHBOARD_SIDE_MENU_ITEM_TYPE.FORUMS && <div>12121</div>}
      </Box>


    </Wrapper>
  );
};
