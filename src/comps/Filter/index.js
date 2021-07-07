import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RadioButton from "../RadioButton";

const Container = styled.div`
  z-index: 2;
  border: 2px solid #b7b7b7;
  border-radius: 10px;
  min-width: 326px;
  max-width: 326px;
  min-height: 243px;
  max-height: 243px;
  background-color: rgba(238, 238, 238, 0.9);
  position: absolute;
  top: 65px;
  left: 6%;
  display: ${(props) => (props.display ? props.display : "block")};
`;
const ContOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 326px;
  max-width: 326px;
  min-height: 75%;
  max-height: 75%;
  margin-top: 20px;
`;
const ContTwo = styled.div`
  min-width: 326px;
  max-width: 326px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  bottom: 25px;
`;
const Button = styled.button`
  min-width: 108px;
  max-width: 108px;
  min-height: 33px;
  max-height: 33px;
  background-color: #bd9b52;
  color: #fff;
  border-radius: 6px;
  border: none;
  outline: none;
  &:active {
    box-shadow: 0 3 px #666;
    transform: translateY(2px);
  }
`;

const Option = styled.div`
  display: flex;
  min-width: 100px;
  min-height: 30px;
  max-height: 30px;
  align-items: center;
  margin: 10px 0 10px 0;
  color: ${(props) => (props.color ? props.color : "#2D7700")};
`;

// const FormRadio = styled.input.attrs({ type: "radio" })`
//   margin-right: 10px;
//   &:after {
//     background: white;
//   }
// `;

const Filter = ({ onRadioSelect, onApply }) => {
  const [display, setDisplay] = useState("block");

  // const onApply = () => {
  //   setDisplay("none");
  // };

  const onClose = () => {
    setDisplay("none");
  };

  return (
    <Container display={display}>
      <ContOne>
        {/* <Option>
          <FormRadio
            type="radio"
            value="Income"
            onChange={(e) => {
              setRadio(e.target.value);
            }}
            checked={radio === "Income"}
          />{" "}
          Income
        </Option>
        <Option color="#B80000">
          <FormRadio
            type="radio"
            value="Expense"
            onChange={(e) => {
              setRadio(e.target.value);
            }}
            checked={radio === "Expense"}
          />{" "}
          Expense
        </Option> */}
        <Option>
          <RadioButton text="Bills" onRadioSelect={onRadioSelect} />
        </Option>
        <Option>
          <RadioButton
            text="Income"
            color="#2D7700"
            onRadioSelect={onRadioSelect}
          />
        </Option>
        <Option>
          <RadioButton
            text="Expense"
            color="#B80000"
            onRadioSelect={onRadioSelect}
          />
        </Option>
      </ContOne>
      <ContTwo>
        <Button onClick={onClose}>ClOSE</Button>
        <Button onClick={onApply}>APPLY</Button>
      </ContTwo>
    </Container>
  );
};
Filter.defaultProps = {};
export default Filter;
