import { memo, VFC } from 'react';
import styled from 'styled-components';

import { PrimaryButton } from '../components/atoms';

const ImageUploaded: VFC = memo(() => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px;
    width: 360px;
    height: 520px;
    background: red;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
  `;

  const Text = styled.p`
    color: blue;
    font-size: 1.5em;
    &:hover {
      opacity: 0.2;
    }
  `;

  return (
    <Container>
      <div>
        <img alt="check" />
      </div>
      <div>
        <h2>Uploaded Successfully!</h2>
      </div>
      <div>
        <img alt="画像" />
      </div>
      <div>
        <div>
          <Text>url</Text>
        </div>
        <div>
          <PrimaryButton type="button">Copy Link</PrimaryButton>
        </div>
      </div>
    </Container>
  );
});

export default ImageUploaded;
