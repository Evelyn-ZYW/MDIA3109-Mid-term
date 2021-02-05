import logo from './logo.svg';
import './App.scss';
import Main from 'pages/main';
import Homepage from 'pages/Homepage';
import 'pages/Homepage/homepage.scss';
import 'pages/AddBills/addbills.scss';
import 'pages/AddTransaction/addtransaction.scss';
import AddTransaction from 'pages/AddTransaction';
import RadioButtons from 'comps/RadioButtons';

function App() {
  return (
    <div className="App">
      {/* <Main /> */}

      <AddTransaction />
    </div>
  );
}

export default App;
