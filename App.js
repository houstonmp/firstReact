import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/ExpenseForm/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Pasta',
    amount: 50,
    date: new Date(2021, 5, 12),
  },
]


function App() {

  const [expenseArr, setExpenseArr] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenseArr((prevState) => {
      return [expense, ...prevState];
    });
  }

  return (
    <div>
      <h2>Expenses</h2>
      <NewExpense arrLength={expenseArr.length} onAddExpense={addExpenseHandler} />
      <Expenses expenseArr={expenseArr} />
    </div>
  );
}

export default App;
