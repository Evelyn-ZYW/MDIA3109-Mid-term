import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "141px")};
  height: ${(props) => (props.height ? props.height : "33px")};
  background-color: #bd9b52;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  color: white;
  border: 0;
  opacity: 0.8;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16px")};
  transition: 0.3s;

  :hover {
    opacity: 1;
    transition: 0.3s;
  }
`;

const Buttons = ({ text, width, height, fontSize, onClick }) => {
  return (
    <Container>
      <Button
        width={width}
        height={height}
        fontSize={fontSize}
        onClick={onClick}
      >
        {text}
      </Button>
    </Container>
  );
};

Buttons.defaultProps = {
  text: "hi",
  width: "141px",
  height: "33px",
  fontSize: "16px",
};
export default Buttons;
