import React, { useState } from "react";
import styled from "styled-components";
import close from "images/close.png";
import RadioButton from "../RadioButton";
import Button from "../Button";

const Container = styled.div`
  z-index: 1;
  // min-width: 332px;
  // max-width: 332px;
  // min-height: 423px;
  // max-height: 432px;
  min-width: 300px;
  max-width: 300px;
  min-height: 300px;
  max-height: 300px;
  border-radius: 20px;
  // background-color: rgba(255, 255, 255, 0.9);
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: absolute;
  top: 30%;
  left: 10%;
  ${(props) => props.display && "display: flex;"};
  flex-direction: column;
  // justify-content: space-around;
  justify-content: center;
`;
const Row = styled.div`
  margin: 15px 25px;
  position: relative;
  display: flex;
  justify-content: ${(props) => (props.jc ? props.js : "space-between")};

  & > span {
    display: flex;
    flex-direction: column;
    min-width: 70%;
    color: ${(props) => (props.color ? props.color : "#002B54")};

    & > span {
      display: flex;
      justify-content: space-between;
      padding: 8px;
      & > span {
        display: flex;
      }
    }
  }
`;
const Img = styled.img`
  max-width: ${(props) => (props.maxwidth ? props.maxwidth : "67px")};
  max-height: ${(props) => (props.maxheight ? props.maxheight : "67px")};
`;

// const FormRadio = styled.input.attrs({ type: "radio" })`
//   margin-right: 10px;
//   &: after {
//     background: white;
//   }
//   &: hover {
//     cursor: pointer;
//   }
// `;
const RadioButtonCont = styled.div`
  display: ${(props) => (props.displayRadio ? props.displayRadio : "none")};
  // display: ${({ displayRadio }) => (displayRadio ? "flex" : "none")};
  // ${(props) => props.displayRadio && "display: flex;"};
  // ${(displayRadio) => displayRadio && "display: flex;"};
  // display: flex;
  align-items: center;
  justify-content: space-around;
  // margin: 15px 25px;
`;
const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
  margin: 15px 25px;
`;
const Close = styled.img`
  position: relative;
  right: -98%;
  min-width: 15px;
  max-width: 15px;
  &: hover {
    cursor: pointer;
  }
`;
const Type = styled.span`
  color: ${(props) => (props.color ? props.color : "")};
`;
const Popup = ({
  onPopupClose,
  id,
  title,
  src,
  type,
  amount,
  description,
  display,
  color,
  onRadioSelect,
  onClick,
  displayRadio,
}) => {
  const [radio, setRadio] = useState("");
  const [complete, setComplete] = useState(null);
  /*
        // const [display, setDisplay] = useState("flex");
        // console.log(complete)
    
        const HandleVisibility = () => {
            setDisplay("none")
            setComplete(true)
        }
    
        const HandleComplete = () => {
            if (radio === "") {
                alert("Bill status not updated!")
                HandleVisibility()
                setComplete(true)
            } else {
                HandleVisibility()
                setComplete(true)
            }
            onPopupComplete(radio)
        }
    */
  /*
  const ClosePopup = () => {
    if (radio === "") {
      alert("Bill status not updated!");
      setComplete(complete);
    } else {
      setComplete(complete);
    }
    onPopupClose(radio);
    setComplete(complete);
    // console.log("Radio " + radio)
  };
*/
  const ClosePopup = () => {
    setComplete(complete);
    onPopupClose(radio);
    setComplete(complete);
    console.log("Radio: ", radio);
  };

  return (
    <Container display={display} id={id}>
      <Row>
        <Close src={close} onClick={ClosePopup} />
      </Row>
      <Row>
        <Img src={src} />
        <span>
          <span>{title}</span>
          <span>
            <Type color={color}>{type}</Type>
            <span>$ {amount}</span>
          </span>
        </span>
      </Row>
      <Row>
        <span>
          <span>{description}</span>
        </span>
      </Row>
      <RadioButtonCont display={displayRadio}>
        <RadioButton text="PAID" onRadioSelect={onRadioSelect} />
        <RadioButton text="PENDING" onRadioSelect={onRadioSelect} />
      </RadioButtonCont>

      {/* <FormRadio
          type="radio"
          value="PAID"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
          checked={radio === "PAID"}
        />{" "}
        <div style={{ color: "#2D7700" }}>PAID</div>
        <FormRadio
          type="radio"
          value="PENDING"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
          checked={radio === "PENDING"}
        />{" "}
        <div style={{ color: "#FF8A00" }}>PENDING</div> */}
      <ButtonCont>
        <Button onClick={ClosePopup} text="OK" width="122px" height="42px" />
      </ButtonCont>
    </Container>
  );
};
Popup.defaultProps = {
  onPopupClose: () => {},
  onRadioSelect: () => {},
};
export default Popup;
