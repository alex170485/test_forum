import styled from '@emotion/styled';

type AvatarPhotoPropsType = {
  size: 'small' | 'medium';
};

const AVATAR_PHOTO_SIZE = {
  small: '40px',
  medium: '120px',
};

export const AvatarPhotoWrapper = styled.div<AvatarPhotoPropsType>((props) => ({
  width: AVATAR_PHOTO_SIZE[props.size],
  height: AVATAR_PHOTO_SIZE[props.size],
  borderRadius: '50%',
  overflow: 'hidden',
}));

export const AvatarPhoto = styled.img({
  width: '100%',
  height: '100%',
});

export const HiddenInput = styled.input({
  display: 'none',
});

export const EditButtonWrapper = styled.div({
  position: 'absolute',
  bottom: '15px',
  right: '15px',
});
