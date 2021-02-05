import React, { useState, useEffect } from 'react';

import Popup from 'comps/Popup';
import Filter from 'comps/Filter';
import Header from 'comps/Header';
import Date from 'comps/Date';
import Transaction from 'comps/Transaction';

import iconRight from 'images/filter.png';
import iconLeft from 'images/back.png';

const TransPage = () => {
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
        {dispop === "display" ? <Popup onPopupComplete={HandleStatus}/> : ""}
        {disfil === "display" ? <Filter /> : ""}
        <Date />
        <Transaction
            onContainerSelect={ShowPopup}
            status={status === "PENDING" ? "PENDING" : status === "PAID" ? "PAID" : ""}
        />
        <Transaction
            onContainerSelect={ShowPopup}
            status={status === "PENDING" ? "PENDING" : status === "PAID" ? "PAID" : ""}
        />
        <Transaction
            onContainerSelect={ShowPopup}
            status={status === "PENDING" ? "PENDING" : status === "PAID" ? "PAID" : ""}
        />
        <Date />
        <Transaction
            onContainerSelect={ShowPopup}
            status={status === "PENDING" ? "PENDING" : status === "PAID" ? "PAID" : ""}
        />
        <Transaction
            onContainerSelect={ShowPopup}
            status={status === "PENDING" ? "PENDING" : status === "PAID" ? "PAID" : ""}
        />
        <Transaction
            onContainerSelect={ShowPopup}
            status={status === "PENDING" ? "PENDING" : status === "PAID" ? "PAID" : ""}
        />
    </div>
}
export default TransPage;