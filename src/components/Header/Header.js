import React from "react";

import styled from "styled-components/macro";
// IMG
import logo from "../../images/icons/Faviconfavicon.svg";

const Nav = styled.div`
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
  border: solid green thin;
`;

const Logo = styled.button`
  width: 150px;
  height: 150px;
  border: none;
  background-color: transparent;
  margin-left: 5vw;
`;

const LogoImg = styled.img`
  width: 100%;
  heught: 100%;
`;

const MenuLink = styled.a`
  text-decoration: none;
  margin-right: 5vw;
`;

const Space = styled.span`
  flex-grow: 1;
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
