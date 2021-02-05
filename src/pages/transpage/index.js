import React, { useState, useEffect } from 'react';

import Popup from 'comps/Popup';
import Filter from 'comps/Filter';
import Header from 'comps/Header';
import Date from 'comps/Date';
import Transaction from 'comps/Transaction';

import iconRight from 'images/filter.png';
import iconLeft from 'images/back.png';
import Stacy from 'images/a1.png';
import Greg from 'images/a2.png';


const TransPage = ({ fakedb }) => {
    const [item, setItem] = useState([
        {
            id: 1,
            name: "Stacy",
            type: "Income",
            title: "Feburary salary",
            amount: "2000",
            description: "deposited into joint account",
            status: ""
        },
        {
            id: 2,
            name: "Greg",
            type: "Bill",
            title: "BC Hydro",
            amount: "-100",
            description: "pay by March 10",
            status: "Pending",
        },
        {
            id: 3,
            name: "Greg",
            type: "Expense",
            title: "Shoppers Drug Mart",
            amount: "-25",
            description: "tooth brush",
            status: "",
        },
        {
            id: 4,
            name: "Stacy",
            type: "Expense",
            title: "Uber Drive",
            amount: "-10.57",
            description: "go to walmart",
            status: "",
        },
        {
            id: 5,
            name: "Greg",
            type: "Bill",
            title: "Property tax",
            amount: "650",
            description: "2021 property tax",
            status: "Pending",
        },
    ]
    );
    const setData = (index, property, value) => {
        let newItem = [...item];
        newItem[index][property] = value;
        setItem(newItem);
    }

    const [dispop, setDispop] = useState("none");
    const [disfil, setDisfil] = useState("none");
    const [status, setStatus] = useState("");

    const ShowPopup = (clicked) => {
        console.log("clicked " + clicked)
        if (clicked === false) {
            setDispop("display");
        } else if (clicked === true) {
            setDispop("none")
        }
    }
    const ShowFilter = (clickedfilter) => {
        if (clickedfilter === false) {
            setDisfil("display");
        } else if (clickedfilter === true) {
            setDisfil("none")
        }
    }
    const HandleStatus = (radio) => {
        console.log(radio)
        setStatus(radio);
    }

    return <div className="main">
        <Header
            iconLeft={iconLeft}
            headText="Transaction/Bills"
            iconRight={iconRight}
            onSelectFilter={ShowFilter}
        />
        <Date />
        {item.map(o => <div>

            {dispop === "display" ? <Popup
                onPopupComplete={HandleStatus}
                src={o.name === "Stacy" ? Stacy : Greg}
                title={o.title}
                type={o.type}
                amount={o.amount}
                description={o.description}
            /> : ""}
            {disfil === "display" ? <Filter /> : ""}
            <Transaction
                onTransSelect={ShowPopup}
                src={o.name === "Stacy" ? Stacy : Greg}
                title={o.title}
                amount={"$ "+o.amount}
                status={o.status}
            />

        </div>)}

    </div>
}
export default TransPage;