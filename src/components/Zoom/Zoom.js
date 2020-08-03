import React, { useEffect, useRef } from "react";

import styled from "styled-components/macro";

import Icon from "../Icon/Icon";

// ANIMATION:
// import { gsap } from "gsap";
import { Timeline } from "gsap/gsap-core";

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  font-family: ${(props) => props.theme.fonts[0]};
  color: ${(props) => props.theme.colors.darkgrey[0]};
  display: none;
  opacity: 0;
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
  width: 70vw;
  height: auto;
  background-color: #c3c3c3;
  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const CloseBtn = styled.button`
  width: 70vw;
  color: #ffffff;
  background-color: transparent;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding: 1vw;
  font-size: ${(props) => props.theme.fontSizes.small};
  cursor:pointer;
  &:focus {
    outline: none;
  }
  @media (min-width: 768px) {
    width: 50vw;
  }
`;

const Zoom = ({ active, src, onClose }) => {
  const wrapperRef = useRef();

  useEffect(() => {
    document.body.style.overflowY = active === true ? "hidden" : "unset";

    const tl = new Timeline({});

    const duration = 0.5;
    const opacity = active === true ? 1 : 0;
    const display = active === true ? "flex" : "none";

    tl.to(wrapperRef.current, duration, { opacity, display });
  }, [active]);

  return (
    <Wrapper onClick={onClose} ref={wrapperRef}>
      <ElementContainer>
        <CloseBtn onClick={onClose}>
          <Icon type='close' />
        </CloseBtn>
        <ImgContent src={src} />
      </ElementContainer>
    </Wrapper>
  );
};

export default Zoom;
