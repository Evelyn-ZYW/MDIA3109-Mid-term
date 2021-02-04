import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:column;
    font-size:20px;
    color:#002B54;
`;
const InputBox = styled.input`
    width:308px;
    height:42px;
    border-radius:5px;
    border-color:#002B54;
    font-size:18px;
    margin-top:10px;
    &:hover{
        border: 2px solid #c7deec;
        box-shadow: 0 3px 10px -3px rgba(0, 0, 0, 0.25);
    }
`;

const TransTitle = () => {
    return <Container>
        Transaction Title
        <InputBox type='text'/>
    </Container>
}

TransTitle.defaultProps = {

}

export default TransTitle