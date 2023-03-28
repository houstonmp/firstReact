import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import "./Expenses.css"
import "./ExpenseFilter.css"
import ExpenseFilter from './ExpenseFilter';

function Expenses(props) {
    const [chosenYear, setYear] = useState('2020');

    // Attempt to add ExpenseItem components dynamically
    // const renderExpenseItem = () => {
    //     return props.expenseArr.map((el) => {
    //         const current = <ExpenseItem id={el.id} title={el.title
    //         } amount={el.amount} date={el.date} />;
    //         return current;
    //     });

    // }

    const yearHandler = (selectedYear) => {
        setYear(selectedYear);
        console.log('In Expense.js:', selectedYear);
    }

    return (
        <Card className="expenses">
            <div>
                <ExpenseFilter selected={chosenYear} onSelectYear={yearHandler} />
            </div>
            {props.expenseArr.map((el) => {
                const current =
                    <ExpenseItem
                        id={el.id}
                        title={el.title}
                        amount={el.amount}
                        date={el.date}
                    />;
                return current;
            })}
            {/* <ExpenseItem title={props.expenseArr[0].title} amount={props.expenseArr[0].amount} date={props.expenseArr[0].date}></ExpenseItem>
            <ExpenseItem title={props.expenseArr[1].title} amount={props.expenseArr[1].amount} date={props.expenseArr[1].date}></ExpenseItem>
            <ExpenseItem title={props.expenseArr[2].title} amount={props.expenseArr[2].amount} date={props.expenseArr[2].date}></ExpenseItem>
            <ExpenseItem title={props.expenseArr[3].title} amount={props.expenseArr[3].amount} date={props.expenseArr[3].date}></ExpenseItem> */}
        </Card>
    );
}

export default Expenses;