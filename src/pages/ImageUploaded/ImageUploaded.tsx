import { memo, VFC } from 'react';

import * as S from './style';
import { PrimaryButton } from '../../components/atoms';
// @ts-ignore
// import Flower from '../../static/images/flower.jpg';

const ImageUploaded: VFC = memo(() => {
  return (
    <S.BackGround>
      <S.Container>
        <img alt="check" />
        <div>
          <h2>Uploaded Successfully!</h2>
        </div>
        <img alt="画像" />
        <div>
          <p>url</p>
          <div>
            <PrimaryButton type="button">Copy Link</PrimaryButton>
          </div>
        </div>
      </S.Container>
    </S.BackGround>
  );
});

export default ImageUploaded;
