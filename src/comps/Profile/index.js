import React, {useState, useEffect} from 'react';
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
    margin:5px;
`;

const Titles = styled.div`
`;

const ProfileOne = styled.button`
display:inline-block;
border: 2px solid #002B54;
margin-top:30px;
padding: 5px 35px;
background-color:${props=>props.checked ? "#BD9B52" : "#FFFFFF"};
text-align: center;
text-decoration: none;
color:${props=>props.checked ? "#FFFFFF" : "#000000"};
font-size: 16px;
cursor: pointer;
font-weight:500;
float: left;
`;

const ProfileTwo = styled.button`
display:inline-block;
border: 2px solid #002B54;
margin-top:30px;
padding: 5px 35px;
background-color:${props=>props.checked ? "#BD9B52" : "#FFFFFF"};
color:${props=>props.checked ? "#FFFFFF" : "#000000"};
text-align: center;
text-decoration: none;
font-size: 16px;
cursor: pointer;
float: left;
font-weight:500;
`;

const Allprofile = styled.button`
border-right: none;
border-left:none;
display:inline-block;
margin-top:30px;
padding: 5px 35px;
background-color:${props=>props.checked ? "#BD9B52" : "#FFFFFF"};
color:${props=>props.checked ? "#FFFFFF" : "#000000"};
text-align: center;
text-decoration: none;
font-size: 16px;
cursor: pointer;
font-weight:500;
float: left;
`;

const SecondRow = styled.div`
    display:flex;
    flex-direction:row;
    margin:25px 0px 0px 0px;
    align-items:center;

    img{
        max-width:59px;
        max-hetght:59px;
    }
`;

const AccountNum = styled.div`
font-size: 36px;
margin:0px 20px 0px 20px;
`;

//

const Profile = ({name1, name2,account}) =>{

    const [checked, setChecked] = useState(true);

    var price = [
        "34,240",
        "33,005",
        "67,245"
    ]

    if(checked === true){
        account = price[2];
    } else if(checked === 1){
        account = price[0];
    } else {
        account = price[1];
    }


    return <ProfileCont>
        <Titles>
            <ProfileOne checked={checked === 1} onClick={()=>{
                setChecked(1);
            }}>{name1}</ProfileOne><Allprofile checked={checked === true} onClick={()=>{
                setChecked(true);
            }}>All</Allprofile><ProfileTwo checked={checked === 2} onClick={()=>{
                setChecked(2);
            }}>{name2}</ProfileTwo>
        </Titles>
        <SecondRow>
            <img src={a1} onClick={()=>{
                setChecked(1);
            }}/> <AccountNum>${account}</AccountNum><img src={a2} onClick={()=>{
                setChecked(2);
            }}/>
        </SecondRow>
    </ProfileCont>
}

Profile.defaultProps = {
    name1:"Stacy",
    name2:"Greg",
}

export default Profile;