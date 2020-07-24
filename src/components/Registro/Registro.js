import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";

import { ContainerColumn } from "../../theme/Theme";

// IMG
import sampleImg from "../../images/registroFotografico/2017-05-01.gif";

const SectionHeader = styled.h2`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.medium};
  text-align: center;
`;

const TextContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const TextContent = styled.p`
  width: 100%;
  height: auto;
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
  margin-bottom: 2vh;
`;

const ImgContent = styled.img`
  width: 100%;
  height: auto;
  background-color: pink;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Registro = ({regitroAll, regitroTypes}) => {
 

  return (
    <ContainerColumn theme={{ testingColor: "coral" }}>
      <SectionHeader>Registro</SectionHeader>
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
        <ImgContent src={sampleImg} />
      </ImgContainer>
      <ImgContainer>
        <ImgContent src={sampleImg} />
      </ImgContainer>
    </ContainerColumn>
  );
};

export default Registro;
