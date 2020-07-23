import React, {useContext} from "react";
import Registro from "../Registro/Registro";
import Cultivo from "../Cultivo/Cultivo";

import { Container } from "../../theme/Theme";

// CONTEXT
import Context from "../../context/pageManager-context";
const Home = () => {
  
  const { database } = useContext(Context);

  if(!database){
    return
  }
  console.log(database[0])
  console.log(database[1])

  return (
    <Container>
      <Registro />
      <Cultivo />
    </Container>
  );
};

export default Home;
