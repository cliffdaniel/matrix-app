import styled from "styled-components";

export const Layout = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

export const Header = styled.header`
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
`;

export const LogoImage = styled.img`
  width: 80px;
  height: 80px;
`;

export const Menu = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;

    li {
      margin-right: 20px;

      a {
        text-decoration: none;
        color: #333;
        font-weight: bold;

        &:hover {
          color: #555;
        }
      }
    }
  }
`;

export const Main = styled.main`
  padding: 20px;

  button {
    padding: 10px 35px;
    background-color: #f0f0f0;
    color: #000;
    border: none;
    cursor: pointer;
    font-size: 16px;
    border-radius: 5px;

    &:hover {
      background-color: #f0f0f0;
    }
  }
`;
