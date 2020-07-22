import React from "react";
import Icon from "../Icon/Icon";

import styled from "styled-components/macro";

import { Space } from "../../theme/Theme";

const Container = styled.footer`
  width: 100%;
  height: 15vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  border: none;
  border: solid blue thin;
  font-family: ${(props) => props.theme.fonts[1]};
`;

const SocialMenu = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const SocialMenuItem = styled.li`
  list-style: none;
`;

const SocialBtn = styled.button`
  width: 2vw;
  height: 2vw;
  background-color: transparent;
  border: none;
  margin-right: 4vw;
  @media (min-width: 1440px) {
    width: 4vw;
    height: 4vw;
  }
`;

const Copyright = styled.p`
  background-color: transparent;
  border: none;
  margin-left: ${(props) => props.theme.sideMargin};
  font-size: ${(props) => props.theme.fontSizes.extrasmall};
`;

const Footer = () => {
  return (
    <Container>
      <Copyright>by Rocío Piotti - 2020</Copyright>
      <Space />
      <SocialMenu>
        <SocialMenuItem>
          <SocialBtn>
            <Icon type='instagram' />
          </SocialBtn>
        </SocialMenuItem>
        <SocialMenuItem>
          <SocialBtn>
            <Icon type='github' />
          </SocialBtn>
        </SocialMenuItem>
        <SocialMenuItem>
          <SocialBtn>
            <Icon type='behance' />
          </SocialBtn>
        </SocialMenuItem>
      </SocialMenu>
    </Container>
  );
};

export default Footer;
