import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width:345px;
    height:200px;
    border-radius:10px;
    border: 2px solid #002b54;
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
    padding-left:10px;
`;
const Bill2 = styled.div`
    max-width:100%;
    height:36px;
    display:flex;
    align-items:center;
    padding-left:10px;
`;
const Bill3 = styled.div`
    max-width:100%;
    height:36px;
    background-color:#c7deec;
    display:flex;
    align-items:center;
    padding-left:10px;
`;
const Bill4 = styled.div`
    max-width:100%;
    height:36px;
    display:flex;
    align-items:center;
    padding-left:10px;
`;
const Billcont = styled.div`
    
`;

const fakedb = [
    {
        billname:'Gas & Electricity',
        cost:'$2000',
    },
    {
        billname:'Stacy Car',
        cost:'$400',
    },
    {
        billname:'Greg Phone',
        cost:'$200',
    },
    {
        billname:'Amazon Prime',
        cost:'$7.99',
    },
]

const Bills = ({bill}) => {
    return <Container>
       <Top>Upcoming Bills</Top>
       <Line />
       <Content>
        <Bill1>
            {bill.map(o=><Billcont>
                {key={1}} {o.billname[0]} {o.cost[0]}
                </Billcont> )}
        </Bill1>
        <Bill2>
        {bill.map(o=><Billcont>
                {o.billname} {o.cost}
                </Billcont> )}
        </Bill2>
        <Bill3>
            Greg Phone
        </Bill3>
        <Bill4>
            Amazon Prime
        </Bill4>
       </Content>
    </Container>
}

Bills.defaultProps = {
    bill:fakedb
}

export default Bills