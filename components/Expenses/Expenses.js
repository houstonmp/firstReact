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

    const renderExpenseItem = (expenses) => {
        return props.expenseArr
            .filter((el) => {
                //return only data of the chosenYear
                const date = new Date(el.date).getFullYear();
                return parseInt(chosenYear) === date;
            })
            .map((el) => {
                //Create an array of ExpenseItems of chosenYear
                const current =
                    <ExpenseItem
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        amount={el.amount}
                        date={el.date}
                    />;
                console.log(`Making ${el.id},${el.title},${el.amount},${el.date}`);
                return current;
            })
    }

    return (
        <Card className="expenses">
            <div>
                <ExpenseFilter selected={chosenYear} onSelectYear={yearHandler} />
            </div>
            {renderExpenseItem()}
        </Card>
    );
}

export default Expenses;