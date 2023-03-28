import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import "./Expenses.css"
import "./ExpenseFilter.css"
import ExpenseFilter from './ExpenseFilter';

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

    const renderExpenseItem = (expenses) => {
        return expenses.map((el) => {
            //Create an array of ExpenseItems of chosenYear
            const current =
                <ExpenseItem
                    key={el.id}
                    id={el.id}
                    title={el.title}
                    amount={el.amount}
                    date={el.date}
                />;
            console.log(current);
            return current;
        })
    }

    return (
        <Card className="expenses">
            <div>
                <ExpenseFilter selected={chosenYear} onSelectYear={yearHandler} />
            </div>
            {filteredExpenses.length === 0 && <p>No expenses found.</p>}
            {filteredExpenses.length > 0 && renderExpenseItem(filteredExpenses)}
        </Card>
    );
}

export default Expenses;