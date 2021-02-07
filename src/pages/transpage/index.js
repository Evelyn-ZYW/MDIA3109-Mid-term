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


const TransPage = () => {
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

    const [dispop, setDispop] = useState(null);
    const [disfil, setDisfil] = useState("none");
    const [update, setUpdate] = useState("");
    const [selectedId, setSelectedID] = useState(null);

    const TogglePopup = (id, complete) => {
        if (complete === true) {
            setDispop("display")
        } else if (complete === false) {
            setDispop("none")
        }
        setSelectedID(id)
    }
    const ShowFilter = (clickedfilter) => {
        if (clickedfilter === false) {
            setDisfil("display");
        } else if (clickedfilter === true) {
            setDisfil("none")
        }
    }
    const HandleStatus = (id, status, update) => {
        let newItem = [...item];
        newItem[id][status] = update;
        setUpdate(newItem);
    }
    /*
      const setData = (index, property, value) => {
          let newItem = [...item];
          newItem[index][property] = value;
          setItem(newItem);
      }
  */
    return <div className="main">
        <Header
            iconLeft={iconLeft}
            headText="Transaction/Bills"
            iconRight={iconRight}
            onSelectFilter={ShowFilter}
        />
        {disfil === "display" ? <Filter /> : ""}
        <Date dateText="Bill" />
        {item.map(o => <div>
            {selectedId === o.id ? <Popup
                id={o.id}
                onPopupClose={HandleStatus}
                src={o.name === "Stacy" ? Stacy : Greg}
                title={o.title}
                type={o.type}
                amount={o.amount}
                description={o.description}
                display={selectedId === o.id}
            /> : ""}
            {o.type === "Bill" ? <Transaction
                id={o.id}
                onTransSelect={TogglePopup}
                src={o.name === "Stacy" ? Stacy : Greg}
                title={o.title}
                amount={"$ " + o.amount}
                status={o.status}
                highlight={selectedId === o.id}
            /> : ""}
        </div>)}
        <Date dateText="Transactions" />
        {item.map(o => <div>
            {selectedId === o.id ? <Popup
                id={o.id}
                onPopupClose={TogglePopup}
                src={o.name === "Stacy" ? Stacy : Greg}
                title={o.title}
                type={o.type}
                amount={o.amount}
                description={o.description}
                display={selectedId === o.id}
            /> : ""}
            {o.type === "Expense" || o.type === "Income" ? <Transaction
                id={o.id}
                onTransSelect={TogglePopup}
                src={o.name === "Stacy" ? Stacy : Greg}
                title={o.title}
                amount={"$ " + o.amount}
                status={o.status}
                highlight={selectedId === o.id}
            /> : ""}
        </div>)}

    </div>
}
export default TransPage;