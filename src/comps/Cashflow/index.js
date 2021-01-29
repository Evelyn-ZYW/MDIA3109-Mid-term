import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 1px solid #002B54;
    border-radius: 10px;
    background-color: #C7DEEC;
    min-width: 346px;
    max-width: 346px;
    min-height: 213px;
    max-height: 213px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    & > div{
        display:flex;
        flex-direction: column;
        padding: 8px 0;
        & > span{
            padding: 5px 15px;
            display: flex;
            justify-content: space-between;
            & > span{
                ${props => props.color && "color:" + props.color + ";"};
            }
        }
    }
`;
const White = styled.div`
    background-color: white;
    min-width: 346px;
    max-width: 346px;
    // border: 1px solid red;
`;
const Subtitle = styled.div`
    border-bottom: 1px solid #002B54;
    align-items: center;
    margin: 0 15px;
`;
const Button = styled.div`
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`;

const Cashflow = ({ inc, exp, net, onContainerSelect }) => {
    return <Container>
        <Subtitle>January Cash Flow</Subtitle>
        <div>
            <span>
                <span>Income</span>
                <span color="#2D7700">{inc}</span>
            </span>
            <span>
                <span>Expenses</span>
                <span color="#B80000">{exp}</span>
            </span>
        </div>
        <White>
            <span>
                <span>New Cash Inflow</span><span>{net}</span>
            </span>
        </White>
        <Button onClick={onContainerSelect}>See More</Button>
    </Container>
}
Cashflow.defaultProps = {
    inc: "$6443.45",
    exp: "$4332.34",
    net: "$2121.20"
}
export default Cashflow;