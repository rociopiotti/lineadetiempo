import React, {useContext} from "react";
import Registro from "../Registro/Registro";
import Cultivo from "../Cultivo/Cultivo";

import { Container } from "../../theme/Theme";

// CONTEXT
import Context from "../../context/pageManager-context";
const Home = () => {
  
  const { database } = useContext(Context);
  console.log(database)
  return (
    <Container>
      <Registro />
      <Cultivo />
    </Container>
  );
};

export default Home;
