import { useGetForums } from '@/apiHooks/useGetForumsQuery.ts';
import { Box } from '@/shared/ui/Box/Box.tsx';
import { Button } from '@/shared/ui/Button/Button.tsx';
import { useState } from 'react';
import { Drawer } from '@/shared/ui/Drawer/Drawer.tsx';
import { CreateForumForm } from '@/components/CreateForumForm/CreateForumForm.tsx';
import { Widget } from '@/shared/ui/Widget/Widget.tsx';
import { Avatar } from '@/shared/ui/Avatar/Avatar.tsx';
import { LastMessageWrapper, WidgetTitle } from '@/bundle/ForumsPage/styles.tsx';
import MessageIcon from '@/assets/MessageIcon.svg';
import { useNavigate } from 'react-router';
import { forumPagePath } from '@/bundle/ForumPage/path.ts';
import { Loader } from '@/shared/ui/Loader/Loader.tsx';

export const ForumsPage = () => {
  const navigate = useNavigate();
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const openDrawer = () => setIsOpenDrawer(true);
  const closeDrawer = () => setIsOpenDrawer(false);

  const navigateToForum = (id: string | number) => {
    navigate(forumPagePath(String(id)));
  };

  const { data: forums, isPending } = useGetForums();

  if (isPending) return <Loader />;

  return (
    <>
      <Box width='100%' flexDirection='column' rowGap='16px'>
        <Box width='100' display='flex' justifyContent='end'>
          <Box width='150px'>
            <Button onClick={openDrawer}>Создать форум</Button>
          </Box>
        </Box>
        <Box width='50%' display='flex' flexDirection='column' rowGap='16px'>
          {forums?.map((forum) => {
            return (
              <Widget key={forum.id} onClick={() => navigateToForum(forum?.id)}>
                <Box width='100%' display='flex' flexDirection='column' rowGap='8px'>
                  <WidgetTitle>{forum?.title}</WidgetTitle>
                  <Box width='100%' display='flex' columnGap='12px'>
                    <Avatar avatarUrl={forum?.author?.avatarUrl} />
                    <Box display='flex' flexDirection='column' rowGap='8px' width='100%'>
                      <LastMessageWrapper>{forum?.posts[0]?.message}</LastMessageWrapper>
                      <Box display='flex' justifyContent='end' alignItems='center'>
                        <MessageIcon />
                        {forum?.posts.length}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Widget>
            );
          })}
        </Box>
      </Box>
      <Drawer isOpen={isOpenDrawer} onClose={closeDrawer}>
        <CreateForumForm onClose={closeDrawer} />
      </Drawer>
    </>
  );
};
