import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Button = styled.button`
    width:${props=>props.width ? props.width : '141px'};
    height:${props=>props.height ? props.height : '33px'};
    background-color:#bd9b52;
    color:white;
    border:0;
    border-radius:5px;
    text-transform:uppercase;
    margin:10px;
    cursor:pointer;
    font-weight:bold;
    font-size:${props=>props.fontSize ? props.fontSize : "12px"}
`;

const Buttons = ({text, width, height, fontSize}) => {

    return <Container>
            <Button width={width} height={height} fontSize={fontSize}>{text}</Button>
    </Container>
}

Buttons.defaultProps = {
    text:"hi",
    width:"141px",
    height:"33px",
    fontSize:"12px"
}
export default Buttons;