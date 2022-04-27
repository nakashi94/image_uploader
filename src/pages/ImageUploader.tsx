import { memo, VFC } from 'react';
import styled from 'styled-components';

// @ts-ignore
import FolderLogo from '../static/svg/folder.svg';
import { PrimaryButton, PrimaryInput } from '../components/atoms';

const ImageUploader: VFC = memo(() => {
  const Container = styled.div`
    display: flex;
    background-color: white;
    flex-direction: column;
    border-radius: 10px;
    border: 1px;
    width: 360px;
    height: 520px;
    margin: auto;
    justify-content: center;
    align-items: center;
    box-shadow: 1px, 1px, 1px, 0, red;
  `;

  const Text = styled.p`
    color: blue;
    font-size: 1.5em;
    &:hover {
      opacity: 0.2;
    }
  `;

  const LogoWrapper = styled.div`
    height: 60px;
    width: 60px;
    margin-left: 80px;
  `;

  const BackGround = styled.div`
    background-color: #f5f5f5;
    display: flex;
    height: 100vh;
  `;

  return (
    <BackGround>
      <Container>
        <div>
          <h1>Upload your image</h1>
        </div>
        <div>
          <Text>File should be Jpeg, Png...</Text>
        </div>
        <div>
          <LogoWrapper>
            <img src={FolderLogo} alt="画像" />
          </LogoWrapper>
          <div>Drop & Drag your image here</div>
        </div>
        <div>
          <p>or</p>
        </div>
        <div>
          <PrimaryButton type="submit">
            choose a file
            <PrimaryInput type="file" />
          </PrimaryButton>
        </div>
      </Container>
    </BackGround>
  );
});

export default ImageUploader;
