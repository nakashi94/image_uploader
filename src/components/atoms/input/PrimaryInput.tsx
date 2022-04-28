import { ChangeEvent, memo, VFC } from 'react';
import * as S from './style';

type Props = {
  type: 'file';
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const PrimaryInput: VFC<Props> = memo((props) => {
  const { type, name, onChange } = props;
  return <S.PrimaryInput type={type} name={name} accept=".png, .jpg" onChange={onChange} />;
});

export default PrimaryInput;
