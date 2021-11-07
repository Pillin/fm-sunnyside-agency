import styled from "@emotion/styled";
import { Testimonial } from "../models/Testimonial"
import { IMG } from "./Image";
import { H4, H5, P } from "./Typography";

const Container = styled.section`
max-width: 327px;
padding: 0px 16px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`;

const TestimonialC = (props: Testimonial) => {
  return <Container>
    <IMG {...props.image} alt="" style={{ borderRadius: "50%", width: "72px" }} />
    <P>{props.description}</P>
    <H4>{props.name}</H4>
    <H5>{props.role}</H5>
  </Container>;
}

export default TestimonialC;