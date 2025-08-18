import {UserType} from "@/types.ts";
import {AllUsersBlockWrapper} from "@/bundle/AdminDashboardPage/styled.tsx";
import {UserCard} from "@/bundle/AdminDashboardPage/ui/UserCard.tsx";

type AllUsersBlockPropsType = {
  users?: UserType[]
}

export const AllUsersBlock = ({users}: AllUsersBlockPropsType) => {
  return (
    <AllUsersBlockWrapper>
      {users?.map((user: UserType) => {
        return (
          <UserCard key={user?.id} user={user} />
        )
      })}
    </AllUsersBlockWrapper>
  )
}