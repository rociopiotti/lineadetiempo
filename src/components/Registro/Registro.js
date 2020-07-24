import React from "react";
import styled from "styled-components/macro";

import { ContainerColumn } from "../../theme/Theme";


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
  margin-bottom: 2vh;
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

const Registro = ({ registroAll}) => {

  const filteredElements = registroAll.filter((item, index) => {
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
      default:
        element = null;
        break;
    }
    return element;
  });

  return (
    <ContainerColumn theme={{ testingColor: "coral" }}>
      <SectionHeader>Registro</SectionHeader>
      {item}
    </ContainerColumn>
  );
};

export default Registro;
