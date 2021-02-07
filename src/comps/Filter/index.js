import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    z-index: 1;
    border: 2px solid #B7B7B7;
    border-radius: 10px;
    min-width: 326px;
    max-width: 326px;
    min-height: 243px;
    max-height: 243px;
    background-color: rgba(238, 238, 238, 0.9);
    position: absolute;
    top: 65px;
    left: 6%;
    display: ${props=>props.display?props.display: "block"};
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
    // border: 1px solid red;
`;
const ContTwo = styled.div`
    min-width: 326px;
    max-width: 326px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 25px;
    // border:1px solid red;
`;
const Button = styled.button`
    min-width: 108px;
    max-width: 108px;
    min-height: 33px;
    max-height: 33px;
    background-color: #BD9B52;
    color: #FFF;
    border-radius: 6px;
    border: none;
    outline: none;
    &:active{
        box-shadow: 0 3 px #666;
        transform: translateY(2px);
    }
`;

const Option = styled.div`
    display: flex;
    min-width: 100px;
    min-height: 30px;
    align-items: center;
    margin: 10px 0 10px 0;
    color: ${props => props.color ? props.color : "#2D7700"}
    // border:1px solid red;
`;

const FormRadio = styled.input.attrs({ type: 'radio' })`
    margin-right: 10px;
    &:after{
        background: white;
    }
`;

const Filter = () => {
    const [radio, setRadio] = useState("");
    const [display, setDisplay] = useState("block");

    const onApply = () => {
        setDisplay("none")
    }

    const onClear = () => {
        setRadio("")
    }

    return <Container display={display}>
        <ContOne>
            <Option>
                <FormRadio type="radio" value="Income" onChange={(e) => { setRadio(e.target.value) }} checked={radio === "Income"} /> Income
        </Option>
            <Option color="#B80000">
                <FormRadio type="radio" value="Expense" onChange={(e) => { setRadio(e.target.value) }} checked={radio === "Expense"} /> Expense
        </Option>
        </ContOne>
        <ContTwo>
            <Button onClick={onClear}>CLEAR</Button>
            <Button onClick={onApply}>APPLY</Button>
        </ContTwo>
    </Container>
}
Filter.defaultProps = {

}
export default Filter;