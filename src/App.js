import React, { useState, useEffect } from "react";
import Routes from "./router/Routes";
import Theme from "./theme/Theme";
import Zoom from "./components/Zoom/Zoom";

// STYLED
import styled from "styled-components/macro";

// CONTEXT
import PageManagerContext from "./context/pageManager-context";

// AXIOS
import axios from "axios";

// DATABASE PATH
import { URL_DB } from "./utils/path";

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

  /// FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(URL_DB);
      setData(response.data);
    };

    fetchData();
  }, []);

  /// HANDLES DATABASE
  useEffect(() => {
    if (data.length === 0) {
      return;
    } else {
      const all = [...data.Cultivo, ...data.Registro];

      const SRC_DICTIONARY = {};

      all.forEach((element) => {
        if (element.src === " ") {
          return;
        } else {
          SRC_DICTIONARY[element.id] = element.src;
        }
      });

      const cultivo = [...data.Cultivo];
      const registro = [...data.Registro];

      setDictionary(SRC_DICTIONARY);
      setRegistro(registro);
      setCultivo(cultivo);
    }
  }, [data]);

  /// SETS MODAL STATE WHEN ELEMENT IS CLICKED
  const onClickElement = (itemId) => {
    const { active } = modal;

    if (!active) {
      setModal({
        active: true,
        src: dictionary[itemId],
      });
    } else {
    }

  };

  const handleZoomClose = () => {
    setModal({
      ...modal,
      active: false,
    });
  };

  return (
    <PageManagerContext.Provider
      value={{
        onClickElement: onClickElement,
        dataCultivo: cultivo,
        dataRegistro: registro,
        titleRegistro: "Registro",
        titleCultivo: "Cultivo",
        modal: modal,
      }}>
      <Theme>
        <Zoom active={modal.active} src={modal.src} onClose={handleZoomClose} />
        <Container>
          <Routes />
        </Container>
      </Theme>
    </PageManagerContext.Provider>
  );
};

export default App;
