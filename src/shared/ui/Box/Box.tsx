import type { ReactNode } from 'react';
import { BoxWrapper, type BoxWrapperPropsType } from './styles.tsx';

type BoxType = BoxWrapperPropsType & {
  children: ReactNode;
};

export const Box = (props: BoxType) => {
  const { children, ...restProps } = props;

  return <BoxWrapper {...restProps}>{children}</BoxWrapper>;
};
