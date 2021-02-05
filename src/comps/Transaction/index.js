import React, { useState } from 'react';
import styled from 'styled-components';
import a1 from 'images/a1.png';

const Container = styled.div`
    min-width:375px;
    min-height:108px;
    background: ${props => props.bgcolor ? props.bgcolor : "#FFF"};
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Line1 = styled.div`
    display:flex;
    justify-content:space-between;
    padding-right:20px;
    padding-left:20px;
    margin-top:20px;
    font-size:18px;
    color:#002b54;

    span{
        display:flex;
        align-items:center;
    }

    img{
        max-width:40px;
        max-hetght:40px;
        margin-right:15px;
    }
`;
const Line2 = styled.div`
    font-size:15px;
    text-transform:uppercase;
    color:#ff8a00;
    text-align:right;
    padding-right:20px;
    // margin-bottom:15px;
`;
const Line3 = styled.div`
    width:325px;
    height: 1px;
    position: absolute;
    left: 7%;
    bottom: 0px;
    border-bottom: 1px solid #002B54;
`;


const Transaction = ({ onTransSelect, title, src, amount, status }) => {

    const [bgcolor, setBgcolor] = useState("white");
    const [clicked, setClicked] = useState(false);

    // console.log(clicked)

    const HandleTransSelect = () => {
        if (bgcolor === "white") {
            setBgcolor("rgba(189, 155, 82, 0.25)");
            setClicked(true)
        } else {
            setBgcolor("white")
            setClicked(false)
        }
        onTransSelect(clicked);
    }

    return <Container onClick={HandleTransSelect} bgcolor={bgcolor} clicked={clicked}>
            <Line1>
                <span><img src={src} />{title}</span>
                <span>{amount}</span>
            </Line1>
            <Line2>{status}</Line2>
            <Line3 />
    </Container>

}

Transaction.defaultProps = {
    onTransSelect: () => { },
}

export default Transaction