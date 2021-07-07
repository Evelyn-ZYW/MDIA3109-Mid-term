import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    font-size:16px;
    color:#002B54;
`;
const InputBox = styled.input`
    width:308px;
    height:${props=>props.height ? props.height : "42px"};
    border-radius:5px;
    border: 1px solid #002B54;
    margin-top:10px;
    transition: 0.3s;
    &:hover{
        transition: 0.3s;
        border: 1px solid #c7deec;
        box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.25);
    }
`;

const TransTitle = ({text, height}) => {
    return <Container>
        {text}
        <InputBox type='text' height={height}/>
    </Container>
}

TransTitle.defaultProps = {
    text:'example',
    height:'42px;'
}

export default TransTitle