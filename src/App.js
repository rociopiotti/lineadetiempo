import React, { useState, useEffect, useCallback } from "react";
import Routes from "./router/Routes";
import Theme from "./theme/Theme";
import styled from "styled-components/macro";

// CONTEXT
import PageManagerContext from "./context/pageManager-context";

// AXIOS
import axios from "axios";

// DATABASE PATH
import { URL_DB } from "./utils/path";
import Zoom from "./components/Zoom/Zoom";

import useScroll from "./utils/useScroll";

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
  const [modal, setModal] = useState({
    active: false,
    src: "",
  });
  const [dictionary, setDictionary] = useState({});
  const [registro, setRegistro] = useState([]);
  const [cultivo, setCultivo] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(URL_DB);
      setData(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (data.length === 0) {
      return;
    } else {
      const all = [...data.Cultivo, ...data.Registro];
      const cultivo = [...data.Cultivo];
      const registro = [...data.Registro];

      const SRC_DICTIONARY = {};

      all.forEach((element) => {
        if (element.src === " ") {
          return;
        } else {
          SRC_DICTIONARY[element.id] = element.src;
        }
      });
      setRegistro(registro);
      setCultivo(cultivo);
      setDictionary(SRC_DICTIONARY);
    }
  }, [data]);

  const onClickElement = (itemId) => {
    if (modal.active === false) {
      setModal({
        active: true,

        src: dictionary[itemId],
      });
    } else {
      setModal({
        active: false,
      });
    }
  };

  const showModal = () => {
    if (modal.active === false) {
      // document.body.style.position = "relative";
      return (
        <Container>
          <Routes />
        </Container>
      );
    } else {
      // document.body.style.position = "fixed";

      return (
        <Zoom
          modal={modal}
          setModal={setModal}
          onClickElement={onClickElement}
        />
      );
    }
  };

  useScroll(modal.active);
  return (
    <PageManagerContext.Provider
      value={{
        onClickElement: onClickElement,
        dataCultivo: cultivo,
        dataRegistro: registro,
        titleRegistro: "Registro",
        titleCultivo: "Cultivo",
      }}>
      <Theme>{showModal()}</Theme>
    </PageManagerContext.Provider>
  );
};

export default App;
