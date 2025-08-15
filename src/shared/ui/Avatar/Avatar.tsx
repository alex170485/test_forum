import {AvatarPhoto} from "@/components/UserWidget/styled.tsx";
import EmptyAvatarIcon from "@/assets/EmptyAvatarIcon.svg";
import {AvatarWrapper} from "@/shared/ui/Avatar/styles.tsx";

type AvatarPropsType = {
  url?: string,
}

export  const Avatar = ({url}: AvatarPropsType) => {
  return (
    <>
    {url ?
      <AvatarWrapper>
        <AvatarPhoto src={url} alt="User Avatar" />
      </AvatarWrapper>
      :
      <EmptyAvatarIcon />
}
</>
  )
}