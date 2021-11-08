import styled from "@emotion/styled";
import useDeviceSize from "../hooks/useDevice";
import { Box } from "../models/box"
import { IMG } from "./Image";
import { H3, Span } from "./Typography";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  @media(min-width: 769px) {
    flex-direction: row;
    width: 50%;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 100%;
  padding: 0px 8px 40px 8px;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 426px) {
    padding: 0px 72px 32px 72px;
  }

  @media(min-width: 769px) {
     padding: 0px 148px 32px 148px;
  }
`;


const SingleBox = (props: Box) => {
  const { isDesktop } = useDeviceSize();

  const ImgStyle = {
    aspectRatio: isDesktop ? "720 / 600" : "750 / 1200",
    width: "100%"
  }

  return <Container>
    <IMG {...props.image} alt="" style={ImgStyle} />
    <Content>
      <H3>{props.title}</H3>
      <Span>{props.description}</Span>
    </Content>
  </Container>;
}

export default SingleBox;