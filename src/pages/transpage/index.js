import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Popup from 'comps/Popup'
import Filter from 'comps/Filter'
import Header from 'comps/Header'
import Subtitle from 'comps/Subtitle'
import Transaction from 'comps/Transaction'

import iconRight from 'images/filter.png'
import iconLeft from 'images/back.png'
import Stacy from 'images/a1.png'
import Greg from 'images/a2.png'

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  min-width: 375px;
  max-width: 375px;
  min-height: 812px;
  max-height: 812px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
`

const TransPage = () => {
  const [item, setItem] = useState([
    {
      id: 1,
      name: 'Stacy',
      type: 'Income',
      title: 'Feburary salary',
      amount: '2000',
      description: 'deposited into joint account',
      status: '',
      date: '2021/1/18',
    },
    {
      id: 2,
      name: 'Greg',
      type: 'Bill',
      title: 'BC Hydro',
      amount: '100',
      description: 'pay by March 10',
      status: 'Pending',
      date: '2021/1/23',
    },
    {
      id: 3,
      name: 'Greg',
      type: 'Expense',
      title: 'Shoppers Drug Mart',
      amount: '-25',
      description: 'tooth brush',
      status: '',
      date: '2021/1/16',
    },
    {
      id: 4,
      name: 'Stacy',
      type: 'Expense',
      title: 'Uber Drive',
      amount: '-10.57',
      description: 'go to walmart',
      status: '',
      date: '2021/1/22',
    },
    {
      id: 5,
      name: 'Greg',
      type: 'Bill',
      title: 'Property tax',
      amount: '650',
      description: '2021 property tax',
      status: 'Pending',
      date: '2021/1/08',
    },
    {
      id: 6,
      name: 'Stacy',
      type: 'Bill',
      title: 'Mortgage',
      amount: '2240',
      description: 'Feb mortgage',
      status: 'Pending',
      date: '2021/1/18',
    },
  ])

  const [dispop, setDispop] = useState(null)
  const [disfil, setDisfil] = useState('none')
  const [filter, setFilter] = useState('')
  const [update, setUpdate] = useState('')
  const [status, setStatus] = useState('')
  const [selectedId, setSelectedID] = useState(null)

  const TogglePopup = (id, complete) => {
    if (complete === true) {
      setDispop('display')
    } else if (complete === false) {
      setDispop('none')
    }
    setSelectedID(id)
  }
  const ShowFilter = (expand) => {
    if (expand === false) {
      setDisfil('display')
    } else if (expand === true) {
      setDisfil('none')
    }
  }
  const HandleStatus = (id, status, update) => {
    let newItem = [...item]
    newItem[id][status] = update
    setUpdate(newItem)
  }
  const HandleFilter = (text) => {
    setFilter(text)
    console.log(filter)
  }
  const HandleRadioSelect = (text) => {
    setStatus(text)
    console.log(status)
  }
  const HandleStatusUpdate = () => {
    HandleRadioSelect()
  }
  // const HandleApplyFilter = ()
  /*
      const setData = (index, property, value) => {
          let newItem = [...item];
          newItem[index][property] = value;
          setItem(newItem);
      }
  */

  /*
  return (
    <div className="main">
      <Header
        iconLeft={iconLeft}
        headText="Transaction/Bills"
        iconRight={iconRight}
        onSelectFilter={ShowFilter}
      />
      {disfil === "display" ? (
        // <Filter onRadioSelect={HandleFilter} onApply={HandleApplyFilter} />
        <Filter onRadioSelect={HandleFilter} />
      ) : (
        ""
      )}
      <Subtitle text="Bills" />
      {item.map((o) => (
        <div>
          {selectedId === o.id ? (
            <Popup
              id={o.id}
              onPopupClose={HandleStatus}
              src={o.name === "Stacy" ? Stacy : Greg}
              title={o.title}
              type={o.type}
              amount={o.amount}
              description={o.description}
              display={selectedId === o.id}
              onRadioSelect={HandleRadioSelect}
              onClick={HandleStatusUpdate}
              displayRadio={o.type==="Bill" ? "flex" : null}
            />
          ) : (
            ""
          )}
          {o.type === "Bill" ? (
            <Transaction
              id={o.id}
              onTransSelect={TogglePopup}
              src={o.name === "Stacy" ? Stacy : Greg}
              title={o.title}
              amount={"$ " + o.amount}
              status={o.status}
              date={o.date}
              highlight={selectedId === o.id}
            />
          ) : (
            ""
          )}
        </div>
      ))}
      <Subtitle text="Transactions" />
      {item.map((o) => (
        <div>
          {selectedId === o.id ? (
            <Popup
              id={o.id}
              onPopupClose={TogglePopup}
              src={o.name === "Stacy" ? Stacy : Greg}
              title={o.title}
              type={o.type}
              amount={o.amount}
              description={o.description}
              display={selectedId === o.id}
<<<<<<< Updated upstream
              color={o.type === "Income" ? "#2D7700" : "#B80000"}
              displayRadio={o.type === "Income" ? "none" : "flex"}
            />
          ) : (
            ""
          )}
          {o.type === "Expense" || o.type === "Income" ? (
            <Transaction
              id={o.id}
              onTransSelect={TogglePopup}
              src={o.name === "Stacy" ? Stacy : Greg}
              title={o.title}
              amount={"$ " + o.amount}
              status={o.status}
              date={o.date}
              highlight={selectedId === o.id}
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </div>
  );
};
*/

  return (
    <div className="main">
      <Header
        iconLeft={iconLeft}
        headText="Transaction/Bills"
        iconRight={iconRight}
        onSelectFilter={ShowFilter}
      />
      {disfil === 'display' ? (
        // <Filter onRadioSelect={HandleFilter} onApply={HandleApplyFilter} />
        <Filter onRadioSelect={HandleFilter} />
      ) : (
        ''
      )}
      <Subtitle text="Bills" />
      {item.map((o) => (
        <div>
          {o.type === 'Bill' ? (
            <Transaction
              id={o.id}
              onTransSelect={TogglePopup}
              src={o.name === 'Stacy' ? Stacy : Greg}
              title={o.title}
              amount={'$ ' + o.amount}
              status={o.status}
              date={o.date}
              highlight={selectedId === o.id}
              color={o.type === 'Income' ? '#2D7700' : '#B80000'}
              displayRadio={o.type === 'Bill' ? 'flex' : null}
            />
          ) : (
            ''
          )}
        </div>
      ))}
      <Subtitle text="Transactions" />
      {item.map((o) => (
        <div>
          {o.type === 'Expense' || o.type === 'Income' ? (
            <Transaction
              id={o.id}
              onTransSelect={TogglePopup}
              src={o.name === 'Stacy' ? Stacy : Greg}
              title={o.title}
              amount={'$ ' + o.amount}
              status={o.status}
              date={o.date}
              highlight={selectedId === o.id}
            />
          ) : (
            ''
          )}
        </div>
      ))}
      {item.map((o) => (
        <div>
          {selectedId === o.id ? (
            <Overlay>
              <Popup
                id={o.id}
                onPopupClose={TogglePopup}
                src={o.name === 'Stacy' ? Stacy : Greg}
                title={o.title}
                type={o.type}
                amount={o.amount}
                description={o.description}
                display={selectedId === o.id}
                color={o.type === 'Income' ? '#2D7700' : '#B80000'}
                displayRadio={o.type === 'Bill' ? 'flex' : null}
              />
            </Overlay>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  )
}
export default TransPage
