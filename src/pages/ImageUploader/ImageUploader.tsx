import { memo, useCallback, VFC } from 'react';

// @ts-ignore
import FolderLogo from '../../static/svg/folder.svg';
import { PrimaryButton, PrimaryInput } from '../../components/atoms';
import * as S from './style';

const ImageUploader: VFC = memo(() => {
  const onFileInput = useCallback(() => {}, []);
  return (
    <S.BackGround>
      <S.Container>
        <h1>Upload your image</h1>
        <p>File should be Jpeg, Png...</p>
        <S.ImageUploadBox>
          <S.LogoWrapper>
            <img src={FolderLogo} alt="画像" />
          </S.LogoWrapper>
          <p>Drop & Drag your image here</p>
          <PrimaryInput type="file" name="imageURL" onChange={onFileInput} />
        </S.ImageUploadBox>
        <p>or</p>
        <div>
          <PrimaryButton type="submit">
            choose a file
            <PrimaryInput type="file" name="imageURL" onChange={onFileInput} />
          </PrimaryButton>
        </div>
      </S.Container>
    </S.BackGround>
  );
});

export default ImageUploader;
