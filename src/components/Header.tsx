import styled from "@emotion/styled";
import { IMG } from "./Image";
import { H1 } from "./Typography";
import { ReactComponent as IconArrow } from "../assets/icon-arrow-down.svg"

const Container = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  position: relative;
  align-items: center;
  h1 {
    position: absolute;
    color: white;
    z-index: 3;
    margin: 64px 0px;
  }

  svg {
    position: absolute;
    z-index: 3;
    top: 36%;
  }
`;

const Header = (props: {
  title: string;
  image: {
    desktop: string;
    mobile: string;
  }
}) => {
  return <Container>
    <H1> {props.title} </H1>
    <IconArrow />
    <IMG {...props.image} alt="" style={{ width: "100%" }} />

  </Container>
};

export default Header;