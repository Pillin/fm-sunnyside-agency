import styled from "@emotion/styled";


export const Button = styled.button<{ color?: string }>`
  position: relative;
  font-weight: 900;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #24303E;
  background: transparent;
  border: 0px solid transparent;
  z-index:2;

  span {
    position: relative;
    z-index: 1;
  }

  ::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 9px;
    bottom: 3px;
    border-radius: 33px;
    background-color: ${({ color }) => color};
    opacity: 0.25;
    left:0px;
    z-index:1;
  }

  &:hover {
    ::after {
      z-index:0;
      opacity: 1;
    }
  }
`;

export const PrimaryButton = styled.button`
  width: 140px;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: -0.107143px;
  text-transform: uppercase;

  color: #24303E;
  background: #FFFFFF;
  border-radius: 28px;
  border: 0px solid transparent;

  &:hover {
    background-color: #77CDF5;
    color: white;
    mix-blend-mode: normal;
  }

`;