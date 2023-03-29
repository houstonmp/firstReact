import React, { useState } from 'react';

import './ExpenseForm.css';


function ExpenseForm(props) {

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });
    }

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value };
        });
    }
    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });
    };


    //I used the same logic as the warning display practice to show and hide the form
    const [displayForm, setDisplay] = useState(false);

    const showFormHandler = () => {
        setDisplay(true);
    }

    const hideFormHandler = (e) => {
        e.preventDefault();
        //This code resets the Form before closing it
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });
        setDisplay(false);
    }

    //Displays the Add Expense Button if the displayHandler is set to false else displays form
    if (!displayForm) {
        return <button onClick={showFormHandler}>Add Expense</button>;
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>


                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={userInput.enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>

            </div>

            <div className='new-expense__actions'>
                <button onClick={hideFormHandler}> Cancel </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;