import React from "react";
import Registro from "../Registro/Registro";
import Cultivo from "../Cultivo/Cultivo";

import { Container } from "../../theme/Theme";
const Home = () => {
  return (
    <Container>
      <Registro />
      <Cultivo />
    </Container>
  );
};

export default Home;
