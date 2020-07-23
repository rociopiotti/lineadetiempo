import React from "react";

import { Container } from "../../theme/Theme";
import styled from "styled-components";

const ContainerModify = styled(Container)`
  flex-direction: column;
`;

const SectionContainer = styled.section`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 5vh;
`;

const SectionHeader = styled.h2`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const SeparationLine = styled.hr`
  width: 100%;
  height: 0;
  border: solid #343434 0.8px;
`;

const SectionContent = styled.p`
  width: 90%;
  height: auto;
  line-height: 1.5rem;
`;

const About = () => {
  return (
    <ContainerModify>
      <SectionContainer>
        <SectionHeader>Linea de tiempo</SectionHeader>
        <SeparationLine />
        <SectionContent>
          Línea de tiempo es un proyecto de website que reúne el material de
          registro audiovisual del proyecto artístico Proyecto Fungi realizado
          por Rocío Piotti.
        </SectionContent>
      </SectionContainer>
      <SectionContainer>
        <SectionHeader>Sobre la artista</SectionHeader>
        <SeparationLine />
        <SectionContent>
          Rocío Piotti Licenciada en Artes Visuales con Orientación en
          Digitalización de Imagen en la Universidad Nacional de Artes Visuales.
          Actualmente reside en Madrid, España. Diseñadora e ilustradora.
          También, trabaja como educadora en artes y ciencias de la computación.
          Además, colabora en proyectos artísticos con narradores, músicos y
          compañías de teatro.
        </SectionContent>
      </SectionContainer>
    </ContainerModify>
  );
};

export default About;
