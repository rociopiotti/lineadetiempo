import React, { useContext } from "react";

import styled from "styled-components/macro";

import Icon from "../Icon/Icon";
// CONTEXT
import Context from "../../context/pageManager-context";

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: ${(props) => props.theme.fonts[0]};
  color: ${(props) => props.theme.colors.darkgrey[0]};
  z-index: 3;
  &:focus {
    outline: none;
  }
`;

const ElementContainer = styled.div`
  width: 70vw;
  heigth: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10vh;
`;

const ImgContent = styled.img`
  width: 50vw;
  height: auto;
  background-color: #c3c3c3;
`;

const CloseBtn = styled.button`
  width: 50vw;
  color: #ffffff;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 1vw;
  font-size: ${(props) => props.theme.fontSizes.small};
  &:focus {
    outline: none;
  }
`;

const Zoom = () => {
  const { onClickElement, modal } = useContext(Context);

  const { src } = modal;
  return (
    <Wrapper onClick={onClickElement}>
      <ElementContainer>
        <CloseBtn onClick={onClickElement}>
          <Icon type='close' />
        </CloseBtn>
        <ImgContent src={src} />
      </ElementContainer>
    </Wrapper>
  );
};

export default Zoom;
