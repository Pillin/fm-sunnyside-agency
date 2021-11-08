import styled from "@emotion/styled";
import { Testimonial } from "../models/Testimonial"
import { IMG } from "./Image";
import { H4, H5, P } from "./Typography";

const Container = styled.section`
  max-width: 327px;
  width: 100%;
  padding: 32px 16px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
 
  p {
     text-align: center;
  }
  img {
    border-radius: 50%;
  }
  @media (min-width: 769px) {
    width: 350px;
    height: 440px;
    padding: 0px 16px;
  }

`;

const TestimonialC = (props: Testimonial) => {
  return <Container>
    <IMG {...props.image} alt="" style={{ borderRadius: "50%", width: "72px" }} />
    <P>{props.description}</P>
    <section>
      <H4>{props.name}</H4>
      <H5>{props.role}</H5>
    </section>
  </Container>;
}

export default TestimonialC;