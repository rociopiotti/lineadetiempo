import React, { useContext} from "react";

import styled from "styled-components/macro";

import Icon from "../Icon/Icon";
// CONTEXT
import Context from "../../context/pageManager-context";


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

const Zoom = ({ modal }) => {
  const { database, onClickElement } = useContext(Context);
  console.log(modal.src)
  
  return (
    <Wrapper >
      <ElementContainer>
        <CloseBtn onClick={onClickElement}>
          <Icon type='close' />
        </CloseBtn>
        <ImgContent src={modal.src} />
      </ElementContainer>
    </Wrapper>
  );
};

export default Zoom;
