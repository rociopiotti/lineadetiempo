import React from "react";

// STYLED
import styled from "styled-components/macro";
import { Space } from "../../theme/Theme";

// IMG
import logo from "../../images/icons/Faviconfavicon.svg";

// ROUTER
import { Link } from "react-router-dom";

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

const LogoImg = styled.img`
  width: 25px;
  height: 25px;
  background-color: transparent;
  margin-left: ${(props) => props.theme.sideMargin};
`;

const MenuLink = styled(Link)`
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.small};
  margin-right: ${(props) => props.theme.sideMargin};

  @media (min-width: 1440px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }
`;

const Header = () => {
  return (
    <Nav>
      <Link to='/'>
        <LogoImg src={logo} alt='Logo' />
      </Link>
      <Space />
      <MenuLink to='/about'>About</MenuLink>
    </Nav>
  );
};

export default Header;
