import React, { useEffect, useRef } from "react";

import styled from "styled-components/macro";

import Icon from "../Icon/Icon";

import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

// ANIMATION:
import { gsap, CSSPlugin } from "gsap/all";
import { Timeline, Power2 } from "gsap/gsap-core";
gsap.registerPlugin(CSSPlugin);

// EASING
const ease = Power2.easeInOut;

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
  @media (min-width: 1366px) {
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
  padding: 2.5vw 0;
  font-size: ${(props) => props.theme.fontSizes.extrasmall};
  cursor: pointer;
  &:focus {
    outline: none;
  }
  @media (min-width: 1366px) {
    width: 50vw;
    padding: 1vw 0;
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

const Zoom = ({ active, src, onClose }) => {
  const wrapperRef = useRef();

  const BlockScroll = () => {
    active === true
      ? disableBodyScroll(wrapperRef.current)
      : clearAllBodyScrollLocks();
  };

  useEffect(() => {
    BlockScroll();

    const tl = new Timeline({});

    const duration = 0.5;
    const opacity = active === true ? 1 : 0;
    const display = active === true ? "flex" : "none";

    tl.to(wrapperRef.current, duration, { opacity, display, ease: ease });
  }, [active]);

  return (
    <Wrapper onClick={onClose} ref={wrapperRef}>
      <ElementContainer>
        <CloseBtn onClick={onClose}>
          <Icon type='close' />
        </CloseBtn>
        {/* <ImgContent src={`https://www.rociopiotti.com/public/webdesign/lineadetiempo/${src}`} /> */}
        <ImgContent src={src} />
      </ElementContainer>
    </Wrapper>
  );
};

export default Zoom;
