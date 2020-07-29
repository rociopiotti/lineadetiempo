import React, { useContext } from "react";

// THEME
import { Container } from "../../theme/Theme";

// CONTEXT
import Context from "../../context/pageManager-context";

import Timeline from "../Timeline/Timeline";

const Home = () => {
  // Use context to get de db
  const {
    onClickElement,
    dataCultivo,
    dataRegistro,
    titleRegistro,
    titleCultivo,
  } = useContext(Context);
  return (
    <Container>
      <Timeline
        database={dataRegistro}
        title={titleRegistro}
        onClickElement={onClickElement}
      />
      <Timeline
        database={dataCultivo}
        title={titleCultivo}
        onClickElement={onClickElement}
      />
    </Container>
  );
};

export default Home;
