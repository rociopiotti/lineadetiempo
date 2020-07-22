import React from "react";

import styled from "styled-components/macro";
import { Space } from "../../theme/Theme";

// IMG
import logo from "../../images/icons/Faviconfavicon.svg";

const Nav = styled.nav`
  width: 100%;
  height: 15vh;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts[1]};
  color: ${(props) => props.theme.colors.darkgrey};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  border: solid green thin;
`;

const Logo = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  margin-left: ${(props) => props.theme.sideMargin};
`;

const LogoImg = styled.img`
  width: 100%;
  heught: 100%;
`;

const MenuLink = styled.a`
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-right: ${(props) => props.theme.sideMargin};
`;

const Header = () => {
  return (
    <Nav>
      <Logo>
        <LogoImg src={logo} alt='Logo' />
      </Logo>
      <Space />
      <MenuLink>About</MenuLink>
    </Nav>
  );
};

export default Header;
