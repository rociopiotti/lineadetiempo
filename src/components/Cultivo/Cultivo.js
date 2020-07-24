import React from "react";

import styled from "styled-components/macro";

import { ContainerColumn } from "../../theme/Theme";

// IMG
import sampleImg from "../../images/cultivo/2017-04-24.gif";

// VIDEO
import sampleVideo from "../../images/cultivo/2017-05-01.mp4";

const SectionHeader = styled.h2`
  width: 100%;
  font-size: ${(props) => props.theme.fontSizes.medium};
  text-align: center;
`;

const ElementContainer = styled.div`
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

const ImgContent = styled.img`
  width: 100%;
  height: auto;
  background-color: pink;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const VideoContent = styled.video`
  width: 100%;
  height: auto;
  background-color: pink;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Cultivo = ({ cultivoAll }) => {
  const filteredElements = cultivoAll.filter((item, index) => {
    return item.type;
  });

  const item = filteredElements.map((item, index) => {
    let element;
    switch (item.type) {
      case "text":
        element = (
          <ElementContainer key={index}>
            <TextContent>{item.content}</TextContent>
          </ElementContainer>
        );
        break;
      case "img":
        element = (
          <ElementContainer key={index}>
            <ImgContent src={item.src} alt={item.alt} />
          </ElementContainer>
        );
        break;
      case "video":
        element = (
          <ElementContainer key={index}>
            <VideoContent src={item.src} alt={item.alt} autoplay loop muted playsinline/>
          </ElementContainer>
        );
        break;
      default:
        element = null;
        break;
    }
    return element;
  });

  return (
    <ContainerColumn theme={{ testingColor: "coral" }}>
      <SectionHeader>Cultivo</SectionHeader>
      {item}
    </ContainerColumn>
  );
};

export default Cultivo;
