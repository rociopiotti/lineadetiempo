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
  background-color: lightgreen;
`;
const Cultivo = () => {
  return (
    <ContainerColumn>
      <p>CULTIVO</p>
      <p>CULTIVO</p>
      <p>CULTIVO</p>
      <p>CULTIVO</p>
    </ContainerColumn>
  );
};

export default Cultivo;
