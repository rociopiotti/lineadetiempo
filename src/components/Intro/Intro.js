import React, { useEffect, useRef } from "react";

import styled from "styled-components/macro";

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
  text-align: center;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  font-family: ${(props) => props.theme.fonts[0]};
  display: flex;
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
const Title = styled.h1`
  width: 70vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts[1]};
  font-size: ${(props) => props.theme.fontSizes.large};
  color: ${(props) => props.theme.colors.darkgrey};
  letter-spacing: 0.2em;
  opacity: 0;
  display: none;
  @media (min-width: 1366px) {
    width: 50vw;
  }
`;
const Desctiption = styled.p`
  width: 70vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.8em;
  font-family: ${(props) => props.theme.fonts[1]};
  font-size: ${(props) => props.theme.fontSizes.medium};
  opacity: 0;
  display: none;
  @media (min-width: 1366px) {
    width: 50vw;
  }
`;


const Intro = () => {
  const wrapperRef = useRef();
  const titleRef = useRef();
  const description1 = useRef();
  const description2 = useRef();
  const description3 = useRef();
  const description4 = useRef();
  const description5 = useRef();

  useEffect(() => {
    disableBodyScroll(wrapperRef.current);

    const tl = new Timeline({
      onComplete: () => {
        clearAllBodyScrollLocks();
      },
    });

    const durationFast = 1;
    const durationSlow = 3.5;

    const opacity = 1;
    const delay = 2;

    tl.to(titleRef.current, durationFast, {
      opacity,
      display: "flex",
      ease: ease,
    });
    tl.to(titleRef.current, durationFast, {
      delay,
      opacity: 0,
      display: "none",
      ease: ease,
    });

    tl.to(description1.current, durationFast, {
      opacity,
      display: "flex",
      ease: ease,
    });
    tl.to(description1.current, durationFast, {
      delay,
      opacity: 0,
      display: "none",
      ease: ease,
    });

    tl.to(description2.current, durationSlow, {
      opacity,
      display: "flex",
      ease: ease,
    });
    tl.to(description2.current, durationSlow, {
      delay,
      opacity: 0,
      display: "none",
      ease: ease,
    });

    tl.to(description3.current, durationFast, {
      opacity,
      display: "flex",
      ease: ease,
    });
    tl.to(description3.current, durationFast, {
      delay,
      opacity: 0,
      display: "none",
      ease: ease,
    });

    tl.to(description4.current, durationFast, {
      opacity,
      display: "flex",
      ease: ease,
    });
    tl.to(description4.current, durationFast, {
      delay,
      opacity: 0,
      display: "none",
      ease: ease,
    });

    tl.to(description5.current, durationSlow, {
      opacity,
      display: "flex",
      ease: ease,
    });
    tl.to(description5.current, durationSlow, {
      delay,
      opacity: 0,
      display: "none",
      ease: ease,
    });

    tl.to(wrapperRef.current, durationFast, {
      opacity: 0,
      display: "none",
      ease: ease,
    });
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <ElementContainer>
        <Title ref={titleRef}>Línea de tiempo</Title>
        <Desctiption ref={description1}>
          Sitio web que reúne el registro audiovisual de la investigación
          artística Proyecto Fungi.
        </Desctiption>
        <Desctiption ref={description2}>
          En paralelo al cultivo de micelio realizamos un registro fotográfico
          de hongos urbanos.<br></br> Este registro acompañó el proceso de
          trabajo.
        </Desctiption>
        <Desctiption ref={description3}>
          Permitiendo la observación del micelio en un entorno natural.
        </Desctiption>
        <Desctiption ref={description4}>
          El material está organizado en orden cronológico.
        </Desctiption>
        <Desctiption ref={description5}>
          En el lado izquierdo se encuentra un registro fotográfico de hongos
          urbanos.<br></br>En el derecho se pueden ver el proceso de cultivo
          realizado en el taller.
        </Desctiption>
      </ElementContainer>
    </Wrapper>
  );
};

export default Intro;
