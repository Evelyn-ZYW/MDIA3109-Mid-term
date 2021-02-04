import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:345px;
    height:200px;
    border-radius:10px;
    border: 1px solid #002b54;
    background-color:white;
`;
const Top = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:#002b54;
    font-weight:bold;
    font-size:18px;
    margin-top: 10px;
`;
const Line = styled.hr`
    width:308px;
    margin-bottom:12px;
`;
const Content = styled.div`

`;
const Bill1 = styled.div`
    max-width:100%;
    height:36px;
    background-color:#c7deec;
    display:flex;
    align-items:center;
    padding-left:20px;
    padding-right:20px;
    justify-content:space-between;
`;
const Bill2 = styled.div`
    max-width:100%;
    height:36px;
    display:flex;
    align-items:center;
    padding-left:20px;
    padding-right:20px;
    justify-content:space-between;
`;
const Bill3 = styled.div`
    max-width:100%;
    height:36px;
    background-color:#c7deec;
    display:flex;
    align-items:center;
    padding-left:20px;
    padding-right:20px;
    justify-content:space-between;
`;
const Bill4 = styled.div`
    max-width:100%;
    height:36px;
    display:flex;
    align-items:center;
    padding-left:20px;
    padding-right:20px;
    justify-content:space-between;
`;



const Bills = ({bill}) => {
    return <Container>
       <Top>Upcoming Bills</Top>
       <Line />
       <Content>
        <Bill1>
            <span>Gas & Electricity</span>
            <span>$2000</span>
        </Bill1>
        <Bill2>
            <span>Stacy Car</span>
            <span>$400</span>
        </Bill2>
        <Bill3>
            <span>Greg Phone</span>
            <span>$200</span>
        </Bill3>
        <Bill4>
            <span>Amazon Prime</span>
            <span>$7.99</span>
        </Bill4>
       </Content>
    </Container>
}

Bills.defaultProps = {

}

export default Bills