import React, { useState } from "react";
import styled from "styled-components";
import close from "images/close.png";
import RadioButton from "../RadioButton";

const Container = styled.div`
  z-index: 1;
  min-width: 332px;
  max-width: 332px;
  min-height: 423px;
  max-height: 432px;
  border: 2px solid #b7b7b7;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 20%;
  left: 5%;
  ${(props) => props.display && "display: flex;"};
  flex-direction: column;
  justify-content: space-around;
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
  // display: ${(props) => (props.displayRadio ? props.displayRadio : "flex")};
  // display: ${(props) => props.displayRadio && "display: flex;"};
  display: ${({ displayRadio }) => (displayRadio ? "flex" : "none")};
  align-items: center;
  justify-content: space-around;
`;
const ButtonCont = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  min-width: 122px;
  max-width: 122px;
  min-height: 43px;
  max-height: 43px;
  background-color: #bd9b52;
  color: #fff;
  border-radius: 6px;
  border: none;
  outline: none;
  &: active {
    box-shadow: 0 3 px #666;
    transform: translateY(2px);
  }
  &: hover {
    cursor: pointer;
  }
`;
const Close = styled.img`
  position: relative;
  right: -95%;
  min-width: 20px;
  max-width: 20px;
  &: hover {
    cursor: pointer;
  }
`;
const Type = styled.span`
  color: ${(props) => (props.color ? props.color : "")};
`;
const PopupBill = ({
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

      <RadioButtonCont>
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
        <Button onClick={onClick}>OK</Button>
      </ButtonCont>
    </Container>
  );
};
PopupBill.defaultProps = {
  onPopupClose: () => {},
  onRadioSelect: () => {},
};
export default PopupBill;
