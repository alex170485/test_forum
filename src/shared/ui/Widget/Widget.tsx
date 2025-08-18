import { Wrapper } from '@/shared/ui/Widget/styles.tsx';
import { ReactNode } from 'react';

type WidgetPropsType = {
  onClick?: () => void;
  children: ReactNode;
};

export const Widget = ({ onClick, children }: WidgetPropsType) => {
  return <Wrapper onClick={() => onClick?.()}>{children}</Wrapper>;
};
