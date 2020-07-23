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

  return (
    <Container>
      <Registro registroElements = {database[0]} />
      <Cultivo cultivoElements = {database[1]}/>
    </Container>
  );
};

export default Home;
