import { ChangeEvent, memo, useCallback, VFC } from 'react';
import { ref, uploadBytes } from 'firebase/storage';

// @ts-ignore
import FolderLogo from '../../static/svg/folder.svg';
import { PrimaryButton, PrimaryInput } from '../../components/atoms';
import * as S from './style';
import storage from '../../firebase';

const ImageUploader: VFC = memo(() => {
  const onFileInput = useCallback((e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files !== null) {
      if (e.target.files.length !== 0) {
        const file = e.target.files[0];
        const storageRef = ref(storage, `image/${file.name}`);
        uploadBytes(storageRef, file).then(() => {
          console.log('Uploaded a blob or file!');
        });
      }
    }
  }, []);
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
