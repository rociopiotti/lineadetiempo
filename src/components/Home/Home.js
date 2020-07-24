import React, { useContext } from "react";
import Registro from "../Registro/Registro";
import Cultivo from "../Cultivo/Cultivo";

import { Container } from "../../theme/Theme";

// CONTEXT
import Context from "../../context/pageManager-context";
const Home = () => {
  const { database } = useContext(Context);

 
  return (
    <Container>
      <Registro regitroAll={database[0]} regitroTypes={database[2]} />
      <Cultivo cultivoAll={database[1]} cultivoTypes={database[3]} />
    </Container>
  );
};

export default Home;
