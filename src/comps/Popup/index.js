import React, {useState} from 'react';
import styled from 'styled-components';
import close from "images/close.png";
import a1 from "images/a1.png";

const Container = styled.div`
    min-width: 332px;
    max-width: 332px;
    min-height: 423px;
    max-height: 432px;
    border: 2px solid #B7B7B7;
    border-radius: 20px;
    background-color: rgba(238, 238, 238, 0.9);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & > div {
        margin: 15px 25px;
        position: relative;
        display: flex;
        justify-content: ${props => props.jc ? props.js : "space-between"};
        & > img {
            max-width: ${props => props.maxwidth ? props.maxwidth : "67px"};
            max-height: ${props => props.maxheight ? props.maxheight : "67px"};
        }
        & > span {
            display:flex;
            flex-direction: column;
            min-width: 70%;
            color: ${props => props.color ? props.color : "black"};

            & > span {
                display:flex;
                justify-content: space-between;
                padding: 8px;
                & > span{
                    display:flex;
                }
            }
        }
    }

`;
const FormRadio = styled.input.attrs({ type: 'radio' })`
`;
const Button = styled.button`
    min-width: 122px;
    max-width: 122px;
    min-height: 43px;
    max-height: 43px;
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
const Close = styled.img`
    position: relative;
    right: -91%;
`;



const Popup = ({ onClose }) => {
    return <Container>
        <div>
            <Close src={close} onClick={onClose} />
        </div>
        <div>
            <img src={a1} />
            <span>
                <span>BC Hydro</span>
                <span>
                    <span style={{color:"#B80000"}}>Bill</span>
                    <span>-$49.99</span>
                </span>
            </span>
        </div>
        <div>
            <span>
                <span>BC Hydro bill for house</span>
                <span>To be paid on March 22, 2021</span>
            </span>
        </div>
        <div>
            <FormRadio /> <div style={{ color: "#2D7700" }} > PAID</div>
            <FormRadio /> <div style={{ color: "#FF8A00" }}>PENDING</div>
        </div>
        <div style={{ justifyContent: "center" }}>
            <Button>OK</Button>
        </div>

    </Container>
}
Popup.defaultProps = {

}
export default Popup;