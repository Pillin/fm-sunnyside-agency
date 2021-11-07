import styled from "@emotion/styled";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import DoubleBox from "./components/DoubleBox";
import SingleBox from "./components/SingleBox";
import Testimonial from "./components/Testimonial"
import { IMG } from "./components/Image";
import { boxes, images, testimonials } from "./data.json";



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
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Content>
        {boxes.map((elem, index) => {
          if (elem.type === "doublebox") return <DoubleBox {...elem} />
          if (elem.type === "singlebox") return <SingleBox  {...elem} />
          return <> </>
        })}
        <Row>
          {testimonials.map((elem, index) => <Testimonial {...elem} />)}
        </Row>

        <Row>
          {images.map((elem, index) =>
            <IMG key={index} {...elem} alt="" style={{ aspectRatio: "447 / 360", width: "25%" }} />
          )}

        </Row>
      </Content>

      <Footer />

    </Container>
  );
}

export default App;
