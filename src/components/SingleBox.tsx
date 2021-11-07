import styled from "@emotion/styled";
import { Box } from "../models/box"
import { IMG } from "./Image";
import { H3, Span } from "./Typography";

const Container = styled.section`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 50%;
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  padding: 0px 32px 32px 32px;
  justify-content: flex-end;
  align-items: center;
`;


const SingleBox = (props: Box) => {
  return <Container>
    <IMG {...props.image} alt="" style={{ aspectRatio: "720 / 600", width: "100%" }} />
    <Content>
      <H3>{props.title}</H3>
      <Span>{props.description}</Span>
    </Content>
  </Container>;
}

export default SingleBox;