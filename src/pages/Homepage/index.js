import React from 'react';
import Cashflow from 'comps/Cashflow';
import Profile from 'comps/Profile';
import Bills from 'comps/Bills';
import citylogo from 'images/citylogo.jpg';
import Buttons from 'comps/Button';

import {useHistory} from "react-router-dom";



const Homepage = () => {

    const history = useHistory();

    return <div className="homepage">
        <img src={citylogo} className="logo"/>
        <div className="profile">
            <Profile />
        </div>
        <div className="cashflow">
            <Cashflow />
        </div>
        <div className="bills">
            <Bills />
        </div>
        <div className="buttons">
            <span>
            <Buttons text={'Add Bill'} onClick={()=>history.push('/addbill')}/>
            </span>
            <span>
            <Buttons text={'Add Transaction'}/>
            </span>
        </div>
    </div>
} 



export default Homepage;

