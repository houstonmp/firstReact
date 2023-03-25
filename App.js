import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/ExpenseForm/NewExpense';

function App() {
  const expenseArr = [
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

  const addExpenseHandler = (expense) => {
    expenseArr.push(expense);
    console.log(expenseArr);
  }

  return (
    <div>
      <h2>Expenses</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenseArr={expenseArr} />
    </div>
  );
}

export default App;
