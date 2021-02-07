import React, { useState } from 'react';
import styled from 'styled-components';
import 'images/back.png';

import {useHistory, useLocation} from "react-router-dom";


const HeaderCont = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    background-color:#C7DEEC;
    min-width:375px;
    min-height:65px;
    //position:absolute; //comment out by evelyn
    top:0px;
    //evelyn's changes below
    // border: 1px solid red;

    img {
        max-width:30px;
        max-height:28px;
        min-width:15px;
        max-height:28px;
        &: hover {
            cursor: pointer;
        }
    }

    .left {
        position:relative;
        right:30px;
    }

    .right{
        position:relative;
        left:20px;
    }

    div{
        font-size:24px;
        min-width:225px;
        max-width:205px;
        text-align:center;
    }

`;



const Header = ({ headText, iconRight, iconLeft, onSelectFilter }) => {

    const history = useHistory();
    const location = useLocation();

    function MoveBack(){
        if(location.pathname ==="/trans"){
            history.push('/');
        } else {
            history.push('/trans');
        }
    }
    
    const [filterclicked, setFilterClicked] = useState(false);
    
    const HandleFilter = () => {
        console.log("Filter Clicked: " + filterclicked);
        if (filterclicked === true) {
            setFilterClicked(!true)
        } else if (filterclicked === false) {
            setFilterClicked(!false)
        }
        onSelectFilter(filterclicked)
    }

    return <HeaderCont>
        <img src={iconLeft} className="left" onClick={MoveBack}/>
        <div>{headText}</div>
        <img src={iconRight} className="right"
            onClick={HandleFilter}
        />
    </HeaderCont>
}

Header.defaultProps = {
    headText: null,
    iconLeft: null,
    iconRight: null,
    onSelectFilter: () => { }
}

export default Header;