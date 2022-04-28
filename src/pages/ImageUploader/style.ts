import styled from "styled-components";

export const Container = styled.div`
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

export const LogoWrapper = styled.div`
  height: 60px;
  width: 60px;
  margin-left: 95px;
  margin-top: 15px;
`;

export const BackGround = styled.div`
  background-color: #f5f5f5;
  display: flex;
  height: 100vh;
`;

export const ImageUploadBox = styled.div`
  border: 2px;
  border-radius: 10px;
  border-style: dashed;
  height: 160px;
  width: 260px;
  text-align: center;
`;
