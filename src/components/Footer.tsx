import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ULList } from "./Navbar";

import Social from "./Social";

const Container = styled.footer`
  width: 100%;
  background-color:  #90D4C6;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const Row = styled.section`
`;

const Footer = () => {
  return <Container>
    <Row>
      <Logo color="rgb(44, 117, 102)" />
    </Row>
    <Row><ULList color="rgb(44, 117, 102)" /></Row>
    <Row><Social /></Row>
  </Container>;
}

export default Footer;