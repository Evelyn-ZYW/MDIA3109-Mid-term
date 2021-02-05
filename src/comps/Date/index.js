import React from 'react';
import styled from 'styled-components';


const DateCont = styled.div`
    min-width:375px;
    max-width:375px;
    font-size:18px;
    color:#BD9B52;
    text-decoration:upercase;
    font-weight:bold;
    border-top:2px solid #BD9B52;
    border-bottom:2px solid #BD9B52;
    // margin:10px; // comment out by evelyn

    div{
        margin:12px 0px 12px 25px;
    }
`;


const Date = ({dateText})=>{
    return <DateCont>
        <div>{dateText}</div>
    </DateCont>
}

Date.defaultProps = {
dateText:"Thu, jan 07, 2021"
}

export default Date;