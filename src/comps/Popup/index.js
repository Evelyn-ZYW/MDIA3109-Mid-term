import React, { useState } from 'react';
import styled from 'styled-components';
import close from "images/close.png";

const Container = styled.div`
    z-index: 1;
    min-width: 332px;
    max-width: 332px;
    min-height: 423px;
    max-height: 432px;
    border: 2px solid #B7B7B7;
    border-radius: 20px;
    background-color: rgba(238, 238, 238, 0.9);
    position: absolute;
    top: 20%;
    left: 5%;
    ${props => props.display && "display: flex;"};
    flex-direction: column; 
    justify-content: space-around;

    & > div {
    margin: 15px 25px;
    position: relative;
    display: flex;
    justify-content: ${props => props.jc ? props.js : "space-between"};

        & > span {
        display: flex;
        flex-direction: column;
        min-width: 70%;
        color: ${props => props.color ? props.color : "black"};

            & > span {
            display: flex;
            justify-content: space-between;
            padding: 8px;
                & > span{
                display: flex;
            }
        }
    }
}

`;
const Img = styled.img`
    max-width: ${props => props.maxwidth ? props.maxwidth : "67px"};
    max-height: ${props => props.maxheight ? props.maxheight : "67px"};
`;

const FormRadio = styled.input.attrs({ type: 'radio' })`
margin-right: 10px;
    &: after{
    background: white;
}
    &: hover{
    cursor: pointer;
}
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
        &: active{
        box-shadow: 0 3 px #666;
        transform: translateY(2px);
    }
        &: hover{
        cursor: pointer;
    }
`;
const Close = styled.img`
    position: relative;
    right: -91%;
        &: hover{
        cursor: pointer;
    }
`;

const Popup = ({ onPopupClose, id, title, src, type, amount, description, display }) => {

    const [radio, setRadio] = useState("");
    const [complete, setComplete] = useState(null)
    /*
        // const [display, setDisplay] = useState("flex");
        // console.log(complete)
    
        const HandleVisibility = () => {
            setDisplay("none")
            setComplete(true)
        }
    
        const HandleComplete = () => {
            if (radio === "") {
                alert("Bill status not updated!")
                HandleVisibility()
                setComplete(true)
            } else {
                HandleVisibility()
                setComplete(true)
            }
            onPopupComplete(radio)
        }
    */
    const ClosePopup = () => {
        if (radio === "") {
            alert("Bill status not updated!")
            setComplete(complete)
        } else {
            setComplete(complete)
        }
        onPopupClose(radio)
        setComplete(complete)
        // console.log("Radio " + radio)
    }

    return <Container display={display} id={id}>
        <div>
            <Close src={close} onClick={ClosePopup} />
        </div>
        <div>
            <Img src={src} />
            <span>
                <span>{title}</span>
                <span>
                    <span style={{ color: "#B80000" }}>{type}</span>
                    <span>{amount}</span>
                </span>
            </span>
        </div>
        <div>
            <span>
                <span>{description}</span>
            </span>
        </div>
        <div>
            <FormRadio type="radio" value="PAID" onChange={(e) => { setRadio(e.target.value) }} checked={radio === "PAID"} /> <div style={{ color: "#2D7700" }} >PAID</div>
            <FormRadio type="radio" value="PENDING" onChange={(e) => { setRadio(e.target.value) }} checked={radio === "PENDING"} /> <div style={{ color: "#FF8A00" }}>PENDING</div>
        </div>
        <div style={{ justifyContent: "center" }}>
            <Button onClick={ClosePopup}>OK</Button>
        </div>
    </Container>
}
Popup.defaultProps = {
    onPopupClose: () => { },
}
export default Popup;