import styled from "@emotion/styled";
import { Box } from "../models/box"
import { IMG } from "./Image";
import { H2, P } from "./Typography";
import { Button } from "./Button";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: ${({ dir }) => dir === "left" ? "row" : "row-reverse"};

`;

const Content = styled.section<{ padding?: string }>`
  max-width: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 32px 0px;
  padding: ${({ padding }) => padding}
`;

const DoubleBox = (props: Box) => {
  return <Container dir={props.dir}>
    <Content>
      <IMG {...props.image} alt="" style={{
        aspectRatio: "720 / 600", width: "100%"
      }} />
    </Content>
    <Content padding="0px 32px">
      <H2>{props.title}</H2>
      <P>{props.description}</P>
      <Button>Learn More</Button>
    </Content>

  </Container>;
}

export default DoubleBox;