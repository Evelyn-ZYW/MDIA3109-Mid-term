import React, {useState} from 'react';
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
`;
const Subtitle = styled.div`
    border-bottom: 1px solid #002B54;
    color: #002B54;
    align-items: center;
    margin: 0 15px;
`;
const Button = styled.div`
    align-items: center;
    color: #002B54;
    &:hover{
        cursor: pointer;
    }
`;

const Cashflow = ({ inc, exp, onContainerSelect }) => {

    const [net, setNet] = useState(Math.round((inc-exp)*100)/100);

    return <Container>
        <Subtitle>January Cash Flow</Subtitle>
        <div>
            <span>
                <span>Income</span>
                <span style={{color:"#2D7700"}}>{inc}</span>
            </span>
            <span>
                <span>Expense</span>
                <span style={{color:"#B80000"}}>{exp}</span>
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
    inc: 6443.45,
    exp: 4332.34,
}
export default Cashflow;