import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import a1 from 'images/a1.png';
import a2 from 'images/a2.png';

const ProfileCont = styled.div`
    background-color:#C7DEEC;
    max-width:346px;
    max-height:180px;
    min-width:346px;
    min-height:180px;
    border-radius: 10px;
    display:flex;
    flex-direction:column;
    jsutify-content:center;
    align-items:center;
    font-size: 18px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`;

const Titles = styled.div`
`;

const ProfileOne = styled.button`
    border: none;
    border-radius: 5px 0 0 5px;
    display:inline-block;
    margin-top:30px;
    padding: 5px 35px;
    background-color:${props => props.checked ? "#BD9B52" : "#FFFFFF"};
    text-align: center;
    text-decoration: none;
    color:${props => props.checked ? "#FFFFFF" : "#000000"};
    font-size: 16px;
    cursor: pointer;
    font-weight:500;
    float: left;
`;

const ProfileTwo = styled.button`
    border: none;
    border-radius: 0 5px 5px 0;
    display:inline-block;
    margin-top:30px;
    padding: 5px 35px;
    background-color:${props => props.checked ? "#BD9B52" : "#FFFFFF"};
    color:${props => props.checked ? "#FFFFFF" : "#000000"};
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    float: left;
    font-weight:500;
`;

const Allprofile = styled.button`
    border: none;
    border-left: 0.063em solid #BD9B52;
    border-right: 0.063em solid #BD9B52;
    display:inline-block;
    margin-top:30px;
    padding: 5px 35px;
    background-color:${props => props.checked ? "#BD9B52" : "#FFFFFF"};
    color:${props => props.checked ? "#FFFFFF" : "#000000"};
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    cursor: pointer;
    font-weight:500;
    float: left;
`;

const SecondRow = styled.div`
    display:flex;
    min-width: 100%;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    margin:25px 0px 0px 0px;

    img{
        max-width:59px;
        max-height:59px;
        border-radius: 50%;
        transition: 0.3s;

        :hover {
            cursor: pointer;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
            transition: 0.3s;
        }
    }
`;

const AccountNum = styled.div`
    font-size: 36px;
    margin:0px 20px 0px 20px;
    min-width: 40%;
    max-width: 40%;
    text-align: center;
`;



const Profile = ({ name1, name2, account }) => {

    const [checked, setChecked] = useState(true);

    var price = [
        "34,240",
        "33,005",
        "67,245"
    ]

    if (checked === true) {
        account = price[2];
    } else if (checked === 1) {
        account = price[0];
    } else {
        account = price[1];
    }


    return <ProfileCont>
        <Titles>
            <ProfileOne checked={checked === 1} onClick={() => {
                setChecked(1);
            }}><h4>{name1}</h4></ProfileOne><Allprofile checked={checked === true} onClick={() => {
                setChecked(true);
            }}><h4>All</h4></Allprofile><ProfileTwo checked={checked === 2} onClick={() => {
                setChecked(2);
            }}><h4>{name2}</h4></ProfileTwo>
        </Titles>
        <SecondRow>
            <img src={a1} onClick={() => {
                setChecked(1);
            }} /> <AccountNum>${account}</AccountNum><img src={a2} onClick={() => {
                setChecked(2);
            }} />
        </SecondRow>
    </ProfileCont>
}

Profile.defaultProps = {
    name1: "Stacy",
    name2: "Greg",
}

export default Profile;