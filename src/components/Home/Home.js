import React from "react";
import Registro from "../Registro/Registro";
import Cultivo from "../Cultivo/Cultivo";

import { Container } from "../../theme/Theme";
const Home = () => {
  return (
    <Container>
      <Cultivo />
      <Registro />
    </Container>
  );
};

export default Home;
