import React from "react";

import styled from "styled-components/macro";
import Icon from "../Icon/Icon";

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
  margin-right: ${(props) => props.theme.sideMargin};
`;
const SocialMenuItem = styled.li`
  list-style: none;
`;
const SocialBtn = styled.button`
  background-color: transparent;
  border: none;
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
