import styled from "@emotion/styled";
import { ReactComponent as IconInstagram } from "../assets/icon-instagram.svg";
import { ReactComponent as IconFacebook } from "../assets/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../assets/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../assets/icon-pinterest.svg";

const Container = styled.section`
  min-width: 170px;
  display: flex;
  justify-content: space-between;

  svg {
    cursor: pointer;
    &:hover path {
      fill: white;
    }
  }
`;

const Social = () => {
  return <Container>
    <IconFacebook />
    <IconInstagram />
    <IconTwitter />
    <IconPinterest />
  </Container>
}

export default Social;