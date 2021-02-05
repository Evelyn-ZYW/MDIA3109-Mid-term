import React, { useState } from 'react';
import styled from 'styled-components';
import a1 from 'images/a1.png';

const Container = styled.div`
    min-width:100%;
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
const Line3 = styled.hr`
    width:325px;
    // position: relative;
    bottom: -22px;
`;

const Transaction = ({ onContainerSelect, onContainerChangeColor, status }) => {

    const [bgcolor, setBgcolor] = useState("white");
    const [clicked, setClicked] = useState(false);

    // console.log(clicked)

    const HandleContainerSelect = () => {
        if (bgcolor === "white") {
            setBgcolor("rgba(189, 155, 82, 0.25)");
            setClicked(true)
        } else {
            setBgcolor("white")
            setClicked(false)
        }
        onContainerSelect(clicked);
    }

    return <Container onClick={HandleContainerSelect} bgcolor={bgcolor} clicked={clicked}>
        <Line1>
            <span><img src={a1} />BC Hydro</span>
            <span>- $ 49.99</span>
        </Line1>
        <Line2>{status}</Line2>
        <Line3 />
    </Container>
}

Transaction.defaultProps = {
    onContainerSelect: () => { },
    onContainerChangeColor: () => { },
}

export default Transaction