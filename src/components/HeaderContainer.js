import React from "react";
import { Header, Container, LogoImage, Menu } from "../styles/HeaderStyles";
import LogoSvg from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

export const HeaderContainer = () => {
  return (
    <Header>
      <Container>
        <div className="logo">
          <LogoImage src={LogoSvg} alt="Logo" />
        </div>
        <Menu>
          <ul>
            <li>
              <NavLink to="/" activeClassName="active">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/rotate" activeClassName="active">Rotar Matriz</NavLink>
            </li>
          </ul>
        </Menu>
      </Container>
    </Header>
  );
};
