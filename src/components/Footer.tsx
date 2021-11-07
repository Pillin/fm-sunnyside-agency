import styled from "@emotion/styled";

import { ULList, Logo } from "./Navbar";

const Container = styled.footer`
  width: 100%;
  background-color:  #90D4C6;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Row = styled.section`

`;

const Footer = () => {
  return <Container>
    <Row>
      <Logo />
    </Row>
    <Row><ULList /></Row>
    <Row></Row>
  </Container>;
}

export default Footer;