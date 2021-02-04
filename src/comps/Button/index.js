import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Button = styled.button`
    width:141px;
    height:33px;
    background-color:#bd9b52;
    color:white;
    border:0;
    border-radius:5px;
    text-transform:uppercase;
    margin:10px;
    cursor:pointer;
`;

const Buttons = ({text}) => {

    return <Container>
            <Button>{text}</Button>
    </Container>
}

Buttons.defaultProps = {
    text:"hi"
}
export default Buttons;