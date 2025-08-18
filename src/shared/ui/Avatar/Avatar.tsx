import { Box } from '@/shared/ui/Box/Box.tsx';
import { ChangeEvent, useRef } from 'react';
import { ALLOWED_IMAGE_TYPES } from '@/types.ts';
import { AvatarPhoto, AvatarPhotoWrapper, EditButtonWrapper, HiddenInput } from '@/shared/ui/Avatar/styles.tsx';
import AvatarSmallIcon from '@/assets/AvatarSmallIcon.svg';
import AvatarMediumIcon from '@/assets/AvatarMediumIcon.svg';

type AvatarPropsType = {
  avatarUrl?: string | null;
  size?: 'small' | 'medium';
  isEdit?: boolean;
  onEdit?: (avatar: File) => void;
};

const AVATAR_SIZE_MAP = {
  small: <AvatarSmallIcon />,
  medium: <AvatarMediumIcon />,
};

export const Avatar = ({ avatarUrl, size = 'small', isEdit = false, onEdit }: AvatarPropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const avatarIcon = AVATAR_SIZE_MAP[size];

  const fakeClickToInput = () => {
    if (!isEdit) return;

    inputRef?.current?.click();
  };

  const selectAvatarHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event?.currentTarget?.files?.[0]) return;

    if (!ALLOWED_IMAGE_TYPES.includes(event?.currentTarget?.files?.[0].type)) {
      // return showSnackbar(translatedMessage, { variant: 'error' });
    }

    onEdit?.(event?.currentTarget?.files?.[0]);
  };

  return (
    <Box position='relative'>
      {avatarUrl ? (
        <AvatarPhotoWrapper size={size}>
          <AvatarPhoto src={avatarUrl} alt='user_avatar' />
          {isEdit && (
            <EditButtonWrapper onClick={fakeClickToInput}>
              {/*<RoundedButton size='medium' iconVariant='note' />*/}
            </EditButtonWrapper>
          )}
        </AvatarPhotoWrapper>
      ) : (
        <AvatarPhotoWrapper size={size}>
          {avatarIcon}
          {isEdit && (
            <EditButtonWrapper onClick={fakeClickToInput}>
              {/*<RoundedButton size='medium' iconVariant='note' />*/}
            </EditButtonWrapper>
          )}
        </AvatarPhotoWrapper>
      )}
      <HiddenInput
        ref={inputRef}
        type='file'
        onChange={(event: ChangeEvent<HTMLInputElement>) => selectAvatarHandler(event)}
        accept='image/jpeg, image/jpg, image/png, image/heic'
      />
    </Box>
  );
};
