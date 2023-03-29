import React, { useState } from 'react';

import Card from '../UI/Card';
import "./Expenses.css"
import "./ExpenseFilter.css"
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';

function Expenses(props) {
    const [chosenYear, setYear] = useState('2020');

    const yearHandler = (selectedYear) => {
        setYear(selectedYear);
        console.log('In Expense.js:', selectedYear);
    }

    const filteredExpenses = props.expenseArr.filter((el) => {
        //return only data of the chosenYear
        const date = new Date(el.date).getFullYear();
        return parseInt(chosenYear) === date;
    });


    return (
        <Card className="expenses">
            <div>
                <ExpenseFilter selected={chosenYear} onSelectYear={yearHandler} />
            </div>
            <ExpensesList items={filteredExpenses} />

            {/* {expensesContent} */}
            {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
            {filteredExpenses.length > 0 && renderExpenseItem(filteredExpenses)} */}
        </Card>
    );
}

export default Expenses;