import React from "react";

import './NewExpense.css';

import ExpenseForm from './ExpenseForm'

function NewExpense(props) {




    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: `e${props.arrLength + 1}`,
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
    }



    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;