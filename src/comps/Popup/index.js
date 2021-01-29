import React from 'react';
import styled from 'styled-components';
import close from "images/close.png";
import a1 from "images/a1.png";

const Container = styled.div`

`;
const FormRadio = styled.input.attrs({type: 'radio'})`
`;
const Button = styled.button`

`;
const Popup = () =>{
    return <Container>
        <div>
            <img src={close} />
        </div>
        <div>
            <img src={a1} />
            <span>BC Hydro</span>
            <span>
                <span>Bill</span>
                <span>-$49.99</span>
            </span>
        </div>
        <div>
            <span>BC Hydro bill for house</span>
            <span>To be paid on March 22, 2021</span>
        </div>
        <div>
            <FormRadio /> PAID
            <FormRadio /> PENDING
        </div>
        <div>
            <Button>OK</Button>
        </div>

    </Container>
}
Popup.defaultProps = {
    img: "images/close.svg"
}
export default Popup;