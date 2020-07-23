import React from "react";

import styled from "styled-components/macro";

import { ContainerColumn } from "../../theme/Theme";

const TextContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: blue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TextContent = styled.p`
  width: 100%;
  height: auto;
  background-color: lightblue;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2vw 2vh;
  line-height: 1.5em;
  font-size: ${(props) => props.theme.fontSizes.extrasmall};

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: violet;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ImgContent = styled.p`
  width: 100%;
  height: auto;
  background-color: pink;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const VideoContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: green;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const VideoContent = styled.p`
  width: 100%;
  height: auto;
  background-color: lightgreen;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Cultivo = () => {
  return (
    <ContainerColumn theme={{ testingBGColor: "lightblue" }}>
      <TextContainer>
        <TextContent>
          Et consectetur Lorem culpa nisi ex duis pariatur velit. Pariatur nulla
          eu amet exercitation et officia voluptate ullamco elit pariatur in
          ullamco. Aute minim ea quis ad ipsum aliquip amet dolore amet id
          aliqua. Id fugiat commodo exercitation velit enim. Qui sit dolor elit
          et amet eu nostrud nisi Lorem tempor eiusmod veniam. Id officia amet
          incididunt aliqua ut.
        </TextContent>
      </TextContainer>
      <ImgContainer>
        <ImgContent>IMG</ImgContent>
      </ImgContainer>
      <VideoContainer>
        <VideoContent>VIDEO</VideoContent>
      </VideoContainer>
    </ContainerColumn>
  );
};

export default Cultivo;
