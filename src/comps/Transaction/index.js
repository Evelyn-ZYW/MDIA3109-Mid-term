import React from 'react';
import styled from 'styled-components';
import a1 from 'images/a1.png';

const Container = styled.div`
    width:365px;
    height:108px;
    background-color:white;
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
    margin-bottom:15px;
`;
const Line3 = styled.hr`
    width:325px;
`;

const Transaction = () => {
    return <Container>
        <Line1>
            <span><img src={a1}/>BC Hydro</span>
            <span>- $ 49.99</span>
        </Line1>
        <Line2>pending</Line2>
        <Line3 />
    </Container>
}

Transaction.defaultProps = {

}

export default Transaction