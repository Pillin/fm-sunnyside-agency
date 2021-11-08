import styled from "@emotion/styled";
import { Box } from "../models/box"
import { IMG } from "./Image";
import { H2, P } from "./Typography";
import { Button } from "./Button";
import useDeviceSize from "../hooks/useDevice";

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 769px) {
    flex-direction: ${({ dir }) => dir === "left" ? "row" : "row-reverse"};
  }
`;

const Content = styled.section<{ padding?: string }>`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px 0px;
  padding: ${({ padding }) => padding};

  @media (min-width: 769px) {
    max-width: 50%;
    align-items: flex-start;
  }
`;

const DoubleBox = (props: Box) => {
  const { isDesktop } = useDeviceSize();
  return <Container dir={props.dir}>
    <Content>
      <IMG {...props.image} alt="" style={{
        aspectRatio: "720 / 600", width: "100%"
      }} />
    </Content>
    <Content padding={isDesktop ? "8px 96px" : "32px 24px"} >
      <H2>{props.title}</H2>
      <P>{props.description}</P>
      <Button color={props.color}><span>Learn More</span></Button>
    </Content>

  </Container>;
}

export default DoubleBox;