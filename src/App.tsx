import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DoubleBox from "./components/DoubleBox";
import SingleBox from "./components/SingleBox";
import Testimonial from "./components/Testimonial"
import Header from "./components/Header";
import { IMG } from "./components/Image";
import { boxes, images, testimonials, header } from "./data.json";
import { H6 } from "./components/Typography";
import useDeviceSize from "./hooks/useDevice";



const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Content = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

const Row = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  aling-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;


const TestimonialContainer = styled.section`
  display: flex;
  padding: 128px 0px;
  flex-wrap: wrap;
  justify-content: center;
`;


function App() {
  const { isDesktop } = useDeviceSize();
  return (
    <Container>
      <Navbar />
      <Header {...header} />

      <Content>
        {boxes.map((elem, index) => {
          if (elem.type === "doublebox") return <DoubleBox {...elem} />
          if (elem.type === "singlebox") return <SingleBox  {...elem} />
          return <> </>
        })}

        <TestimonialContainer>
          <H6>CLIENT TESTIMONIALS</H6>
          {testimonials.map((elem, index) => <Testimonial {...elem} />)}
        </TestimonialContainer>

        <Row>
          {images.map((elem, index) =>
            <IMG key={index} {...elem} alt="" style={{ aspectRatio: "447 / 360", width: isDesktop ? "25%" : "50%" }} />
          )}

        </Row>
      </Content>

      <Footer />

    </Container>
  );
}

export default App;
