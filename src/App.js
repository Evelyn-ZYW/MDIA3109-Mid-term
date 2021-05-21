import logo from './logo.svg';
import './App.scss';
import Main from 'pages/main';
import Homepage from 'pages/Homepage';

import AddBills from 'pages/AddBills';
import Transaction from 'comps/Transaction';
import TransPage from 'pages/transpage';
import 'pages/Homepage/homepage.scss';
import 'pages/AddBills/addbills.scss';
import 'pages/AddTransaction/addtransaction.scss';
import AddTransaction from 'pages/AddTransaction';
import RadioButton from 'comps/RadioButton';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link 
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
          <Switch>
            <Route exact path='/'>
              <Homepage/>
            </Route>
            <Route path='/addbill'>
              <AddBills/>
            </Route>
            <Route path='/addtrans'>
              <AddTransaction />
            </Route>
            <Route path='/trans'>
              <TransPage/>
            </Route>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
