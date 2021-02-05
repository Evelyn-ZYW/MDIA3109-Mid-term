import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:308px;
    height:30px;
    font-size: 26px;
    display:flex;
    justify-content:space-around;
    align-items:center;
`;
const Option = styled.div`
    
    color: ${props => props.color ? props.color : "#2D7700"}
`;

const FormRadio = styled.input.attrs({ type: 'radio' })`

`;

const RadioButtons = () => {
    const [radio, setRadio] = useState("");

    return <Container>
            <Option>
                <FormRadio type="radio" value="Income" onChange={(e) => { setRadio(e.target.value) }} checked={radio === "Income"} /> Income
        </Option>
            <Option color="#B80000">
                <FormRadio type="radio" value="Expense" onChange={(e) => { setRadio(e.target.value) }} checked={radio === "Expense"} /> Expense
        </Option>
    </Container>
}
RadioButtons.defaultProps = {

}
export default RadioButtons;