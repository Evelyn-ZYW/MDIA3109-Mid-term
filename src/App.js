import logo from './logo.svg';
import './App.scss';
import Main from 'pages/main';
import Homepage from 'pages/Homepage';
import 'pages/Homepage/homepage.scss';
import 'pages/AddBills/addbills.scss';
import AddBills from 'pages/AddBills';


function App() {
  return (
    <div className="App">
      {/* <Main /> */}
      <AddBills />
    </div>
  );
}

export default App;
