import React, { useState, useEffect, useRef } from "react";
import Routes from "./router/Routes";
import Theme from "./theme/Theme";
import styled from "styled-components/macro";

// CONTEXT
import PageManagerContext from "./context/pageManager-context";

// AXIOS
import axios from "axios";

// DATABASE PATH
import { URL_DB } from "./utils/path";

//NO SCROLL
import { disableBodyScroll } from "body-scroll-lock";

const Container = styled.div`
  position: relative;
  width: 100%;
  heigth: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts[0]};
  color: ${(props) => props.theme.colors.darkgrey[0]};

  @media (min-width: 1366px) {
    width: 60%;
    margin: 0 auto;
  }
`;

const App = () => {
  const [data, setData] = useState([]);

  const targetElement = useRef();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(URL_DB);
      setData(response.data);
    };

    fetchData();
  }, []);

  const handleDatabase = () => {
    let registroAll = [];
    let cultivoAll = [];
    let titleRegistro = "";
    let titleCultivo = "";

    if (!data) {
      console.log("Data not available");
      return;
    } else {
      for (let key in data) {
        if (key === "Registro") {
          registroAll = [...registroAll, ...data[key]];
          titleRegistro = key;
        }
        if (key === "Cultivo") {
          cultivoAll = [...cultivoAll, ...data[key]];
          titleCultivo = key;
        }
      }
      return [registroAll, cultivoAll, titleRegistro, titleCultivo];
    }
  };

 
  // useEffect(() => {
  //   disableBodyScroll(targetElement.current);
  // }, []);


  return (
    <PageManagerContext.Provider
      value={{ database: handleDatabase()}}>
      <Theme>
        <Container  ref={targetElement}>
          <Routes />
        </Container>
      </Theme>
    </PageManagerContext.Provider>
  );
};

export default App;
