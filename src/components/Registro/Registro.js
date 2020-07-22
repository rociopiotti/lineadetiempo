import React from "react";
import styled from "styled-components/macro";

export const ContainerColumn = styled.div`
  width: 50%;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: lightblue;
`;
const Registro = () => {
  return <ContainerColumn>
  <p>Registro</p>
  <p>Registro</p>
  <p>Registro</p>
  <p>Registro</p>
</ContainerColumn>;
};

export default Registro;