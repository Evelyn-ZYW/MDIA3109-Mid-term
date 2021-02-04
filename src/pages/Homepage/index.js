import React from 'react';
import styled from 'styled-components';
import Cashflow from 'comps/Cashflow';
import Profile from 'comps/Profile';
import Bills from 'comps/Bills';
import citylogo from 'images/citylogo.jpg';
import Buttons from 'comps/Button';

const Homepage = () => {

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
            <Buttons text={'Add Bill'}/>
            </span>
            <span>
            <Buttons text={'Add Transaction'}/>
            </span>
        </div>
    </div>
}
export default Homepage;