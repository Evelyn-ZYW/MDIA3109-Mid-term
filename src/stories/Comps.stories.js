import React from 'react';

import Bills from '../comps/Bills';
import Button from '../comps/Button'; 
import Cashflow from '../comps/Cashflow';
import Date from '../comps/Date';
import Filter from '../comps/Filter';
import Header from '../comps/Header';
import Popup from '../comps/Popup';
import Profile from '../comps/Profile';
import RadioButton from '../comps/RadioButton';
import Transaction from '../comps/Transaction';
import TransTitle from '../comps/TransTitle';

export default {
  title: 'Components',
  component: Bills,
  component: Button,
  component: Cashflow,
  component: Date,
  component: Filter,
  component: Header,
  component: Popup,
  component: RadioButton,
  component: Transaction,
  component: TransTitle,
};


export const MyBills = () =>  <Bills />
export const MyButton= () =>  <Button />
export const MyCashflow= () =>  <Cashflow />
export const MyDate= () =>  <Date />
export const MyFilter= () => <Filter />
export const MyHeader= () => <Header />
export const MyRadioButton= () => <RadioButton />
export const MyTransaction= () => <Transaction />
export const MyTransTitle= () => <TransTitle />