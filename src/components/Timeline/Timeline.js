import React from "react";
import styled from "styled-components/macro";

import { ContainerColumn } from "../../theme/Theme";

import Icon from "../Icon/Icon";
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
  margin-bottom: 10vh;
  -webkit-tap-highlight-color: transparent;
  position: relative;
`;

const ElementContainerText = styled(ElementContainer)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10vh;
  -webkit-tap-highlight-color: transparent;
  position: relative;
`;

const TextContent = styled.p`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0vh 4vw;
  line-height: 1.5em;
  font-size: ${(props) => props.theme.fontSizes.extrasmall};

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;
const TextContentDate = styled(TextContent)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: right;
  padding: 0vh 4vw;
  line-height: 1.5em;
  font-size: ${(props) => props.theme.fontSizes.extrasmall};

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

const ImgContent = styled.img`
  width: 100%;
  height: auto;
  background-color: #c3c3c3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
const IconContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: ${(props) => props.theme.fontSizes.medium};
  bottom: 0.8vh;
  right: 1vw;
  @media (min-width: 1366px) {
    right: 0.5vw;
  }
`;

const Timeline = ({ database, title, onClickElement }) => {
  const renderElement = database.map((item, index) => {
    let element;
    switch (item.type) {
      case "text":
        element = (
          <ElementContainerText key={index}>
            <TextContent>{item.content}</TextContent>
            <TextContentDate>{item.date}</TextContentDate>
          </ElementContainerText>
        );
        break;
      case "img":
        element = (
          <ElementContainer key={index} onClick={() => onClickElement(item.id)}>
            <ImgContent
              src={`https://www.rociopiotti.com/public/webdesign/lineadetiempo/${item.src}`}
              alt={item.alt}
            />
            <IconContainer>
              <Icon type='expand' />
            </IconContainer>
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
    <ContainerColumn>
      <SectionHeader>{title}</SectionHeader>
      {renderElement}
    </ContainerColumn>
  );
};

export default Timeline;
