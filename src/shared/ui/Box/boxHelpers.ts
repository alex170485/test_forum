import type { CSSObject } from '@emotion/react';
import type { BoxWrapperPropsType, SpacingPropsType } from './styles.tsx';

const getSpacingStyles = ({ mt, mr, mb, ml, m }: SpacingPropsType) => {
  if (m) {
    if (Array.isArray(m)) {
      return { margin: m.join(' ') };
    } else {
      return { margin: m };
    }
  }
  return {
    marginTop: mt,
    marginRight: mr,
    marginBottom: mb,
    marginLeft: ml,
  };
};

const getDisplayStyles = ({ display, justifyContent, alignItems, flexDirection }: BoxWrapperPropsType) => {
  if (display) return display;

  return justifyContent || alignItems || flexDirection ? 'flex' : display;
};

export const boxStyles = (props: BoxWrapperPropsType): CSSObject => {
  const {
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    rowGap,
    columnGap,
    width,
    position,
    height,
    cursor,
    textAlign,
    zIndex,
    flex,
    maxWidth,
    whiteSpace,
  } = props;
  const displayStyle = getDisplayStyles(props);
  const spacingStyles = getSpacingStyles(props);

  return {
    display: displayStyle,
    justifyContent,
    alignItems,
    flexDirection,
    flexWrap,
    rowGap,
    columnGap,
    width,
    position,
    height,
    cursor,
    textAlign,
    zIndex,
    flex,
    maxWidth,
    whiteSpace,
    ...spacingStyles,
  };
};
