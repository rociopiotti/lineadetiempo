import React, { useContext } from "react";
import Registro from "../Registro/Registro";
import Cultivo from "../Cultivo/Cultivo";

// THEME
import { Container } from "../../theme/Theme";

// CONTEXT
import Context from "../../context/pageManager-context";


const Home = () => {
  // Use context to get de db
  const { database } = useContext(Context);

  return (
    <Container>
      <Registro registroAll={database[0]} />
      <Cultivo cultivoAll={database[1]} />
    </Container>
  );
};

export default Home;
