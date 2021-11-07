import styled from "@emotion/styled";
import { IMG } from "./Image";
import { PrimaryButton } from "./Button";

const Nav = styled.nav`
  ul {
    display: flex;
    flex-direction; row;
    gap: 0px 32px;
  }
  li {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    /* identical to box height, or 139% */
    display: block;
    list-style: none;
    letter-spacing: -0.128571px;
    color: white;
  }

`;

export const Logo = () => <IMG mobile="/images/logo.svg" desktop="/images/logo.svg" alt=""
  style={{ display: "block", aspectRatio: "170 / 33", width: "170px" }} />

export const ULList = () => {
  return <Nav>
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
  background-color: #4abdf2;
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
  padding: 16px;
`;

const Row = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0px 32px;
`;

const Navbar = () => {
  return <Container>
    <Content>
      <Logo />
      <Row>
        <ULList />
        <PrimaryButton>CONTACT</PrimaryButton>
      </Row>
    </Content>
  </Container>;
}

export default Navbar;