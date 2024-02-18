import { GlobalProvider } from './context/GlobalState';
import './App.css';

import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';


function App() {
  return (
    <GlobalProvider>
      <div id='app-container'>
        <Header />
        <div className='container'>
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
