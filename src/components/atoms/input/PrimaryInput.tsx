import { memo, VFC } from 'react';
import * as S from './style';

type Props = {
  type: 'file';
};

const PrimaryInput: VFC<Props> = memo((props) => {
  const { type } = props;
  return <S.PrimaryInput type={type} />;
});

export default PrimaryInput;
