import logo from './logo.svg';
import './App.scss';
import Main from 'pages/main';
import Homepage from 'pages/Homepage';
import AddBills from 'pages/AddBills';
import Transaction from 'comps/Transaction';
import TransPage from 'pages/transpage';


function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      {/* <AddBills /> */}
      <TransPage />
    </div>
  );
}

export default App;
