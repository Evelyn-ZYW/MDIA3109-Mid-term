import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import a1 from 'images/a1.png'
import a2 from 'images/a2.png'

const ProfileCont = styled.div`
  background-color: #c7deec;
  max-width: 346px;
  max-height: 180px;
  min-width: 346px;
  min-height: 180px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  jsutify-content: center;
  align-items: center;
  font-size: 16px;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
`

const Titles = styled.div`
  display: flex;

  & > button {
    min-height: 1.8rem;
    max-height: 1.8rem;
    min-width: 6.6rem;
    max-width: 6.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    box-sizing: border-box;
    margin-top: 30px;
    padding: 0;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
  }
`

const ProfileOne = styled.button`
  border: none;
  border-radius: 5px 0 0 5px;
  background-color: ${(props) => (props.checked ? '#BD9B52' : '#FFFFFF')};
  color: ${(props) => (props.checked ? '#FFFFFF' : '#002B54')};
`

const ProfileTwo = styled.button`
  border: none;
  border-radius: 0 5px 5px 0;
  background-color: ${(props) => (props.checked ? '#BD9B52' : '#FFFFFF')};
  color: ${(props) => (props.checked ? '#FFFFFF' : '#002B54')};
`

const Allprofile = styled.button`
  border-top: none;
  border-bottom: none;
  border-left: 0.063em solid #bd9b52;
  border-right: 0.063em solid #bd9b52;
  background-color: ${(props) => (props.checked ? '#BD9B52' : '#FFFFFF')};
  color: ${(props) => (props.checked ? '#FFFFFF' : '#002B54')};
`

const SecondRow = styled.div`
  display: flex;
  min-width: 100%;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  margin: 25px 0px 0px 0px;

  img {
    max-width: 59px;
    max-height: 59px;
    border-radius: 50%;
    transition: 0.3s;

    :hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
      transition: 0.3s;
    }
  }
`

const AccountNum = styled.div`
  font-size: 36px;
  margin: 0px 20px 0px 20px;
  min-width: 40%;
  max-width: 40%;
  text-align: center;
  color: #002b54;
`

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
            }}><span>{name1}</span></ProfileOne><Allprofile checked={checked === true} onClick={() => {
                setChecked(true);
            }}><span>All</span></Allprofile><ProfileTwo checked={checked === 2} onClick={() => {
                setChecked(2);
            }}><span>{name2}</span></ProfileTwo>
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
  name1: 'Stacy',
  name2: 'Greg',
}

export default Profile
