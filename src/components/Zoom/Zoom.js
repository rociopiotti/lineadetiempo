import React, { useEffect, useContext, useRef } from "react";

import styled from "styled-components/macro";

import Icon from "../Icon/Icon";
// CONTEXT
import Context from "../../context/pageManager-context";

import sampleImg from "../../images/registroFotografico/2017-05-01.gif";

//NO SCROLL
import { disableBodyScroll } from "body-scroll-lock";

const Wrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: ${(props) => props.theme.fonts[0]};
  color: ${(props) => props.theme.colors.darkgrey[0]};
  top: 0;
  margin: 0;
  z-index: 3;
  overflow: hidden;
`;

const ElementContainer = styled.div`
  width: 70vw;
  heigth: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 10vh;
`;

const ImgContent = styled.img`
  width: 70vw;
  height: auto;
  background-color: #c3c3c3;
`;

const CloseBtn = styled.button`
  color: #ffffff;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 1vw; 
  font-size: ${(props) => props.theme.fontSizes.small};
`;
const Zoom = () => {
  // Use context to get de db
  const { database, onClickElement } = useContext(Context);

  const targetElement = useRef();
  useEffect(() => {
    disableBodyScroll(targetElement.current);
  }, []);
  return (
    <Wrapper ref={targetElement}>
      <ElementContainer>
        <CloseBtn>
          <Icon type='close' />
        </CloseBtn>
        <ImgContent src={sampleImg} />
      </ElementContainer>
    </Wrapper>
  );
};

export default Zoom;
