import { useState } from "react";
import styled from "@emotion/styled";
import { PrimaryButton } from "./Button";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as IconHamburger } from "../assets/icon-hamburger.svg";
import useDeviceSize from "../hooks/useDevice";


const Nav = styled.nav<{ color?: string }>`
  ul {
    display: flex;
    flex-direction; row;
    gap: 0px 32px;
    padding: 0px;
  }
  li {
    font-family: Barlow;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    display: block;
    list-style: none;
    letter-spacing: -0.128571px;
    color: ${({ color }) => color || "white"};

    &:hover {
      color: ${({ color }) => color ? "white" : "rgb(44, 117, 102)"};
    }
  }

`;



export const ULList = (props: { color?: string }) => {
  return <Nav color={props.color}>
    <ul>
      <li>About</li>
      <li>Services</li>
      <li>Projects</li>
    </ul>
  </Nav>
};


const Container = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #3DBFFF;
  justify-content: center;
  gap: 0px 32px;
  align-items: center;
  
  width: 100%;
`;

const Content = styled.section`
  display: flex;
  max-width: 1440px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const Row = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0px 32px;
`;

const MenuContainer = styled.section`

`;

const Menu = () => {
  return <MenuContainer>
    <ULList />
    <PrimaryButton>CONTACT</PrimaryButton>
  </MenuContainer>
}


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isDesktop } = useDeviceSize();
  return <Container>
    <Content>
      <Logo color="white" />
      {isDesktop && <Row>
        <ULList />
        <PrimaryButton>CONTACT</PrimaryButton>
      </Row>}
      {!isDesktop && <IconHamburger />}
      {!isDesktop && showMenu && <Menu />}
    </Content>
  </Container>;
}

export default Navbar;