import type { CSSProperties } from '@emotion/serialize';
import emotionStyled from '@emotion/styled';
import type { HTMLAttributes } from 'react';
import { boxStyles } from './boxHelpers.ts';

export type SpacingPropsType = {
  mt?: string;
  mb?: string;
  mr?: string;
  ml?: string;
  m?: string | string[];
};

export type BoxWrapperPropsType = HTMLAttributes<HTMLDivElement> &
  SpacingPropsType & {
    display?: CSSProperties['display'];
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    alignSelf?: CSSProperties['alignSelf'];
    flexDirection?: CSSProperties['flexDirection'];
    flexWrap?: CSSProperties['flexWrap'];
    rowGap?: CSSProperties['rowGap'];
    columnGap?: CSSProperties['columnGap'];
    width?: CSSProperties['width'];
    maxWidth?: CSSProperties['maxWidth'];
    position?: CSSProperties['position'];
    height?: CSSProperties['height'];
    cursor?: CSSProperties['cursor'];
    textAlign?: CSSProperties['textAlign'];
    zIndex?: CSSProperties['zIndex'];
    focusable?: boolean;
    flex?: CSSProperties['flex'];
    whiteSpace?: CSSProperties['whiteSpace'];
  };

export const BoxWrapper = emotionStyled('div')<BoxWrapperPropsType>(boxStyles);
