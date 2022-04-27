import { memo, ReactNode, VFC } from 'react';

import * as S from './style';

type Props = {
  children: ReactNode;
  type: 'submit' | 'button' | 'reset';
};

const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, type } = props;
  return <S.PrimaryButton type={type}>{children}</S.PrimaryButton>;
});

export default PrimaryButton;
