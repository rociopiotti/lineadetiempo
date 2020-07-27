import React, { useContext } from "react";

// THEME
import { Container } from "../../theme/Theme";

// CONTEXT
import Context from "../../context/pageManager-context";
import Timeline from "../Timeline/Timeline";

const Home = () => {
  // Use context to get de db
  const { database } = useContext(Context);

  return (
    <Container>
      <Timeline database={database[0]} title={database[2]} />
      <Timeline database={database[1]} title={database[3]} />
    </Container>
  );
};

export default Home;
