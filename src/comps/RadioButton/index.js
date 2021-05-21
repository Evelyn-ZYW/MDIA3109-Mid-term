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

const RadioButton = ({onRadioSelect, text}) => {
    const [check, setCheck] = useState(false);

    return <Option color="#B80000">
            {/* <FormRadio type="radio" value="Expense" onChange={(e) => { setRadio(e.target.value) }} checked={radio === "Expense"} /> Expense */}
            <label className="container" onClick={(e) => onRadioSelect(text)}>
                <input type="radio" name="radio" />
                <span
                    className="checkmark"
                    checked={check}
                    onChange={(e) => setCheck(e.target.checked)}
                ></span>
                {text}
            </label>
        </Option>
}
RadioButton.defaultProps = {
    onRadioSelect: ()=> {}
}
export default RadioButton;