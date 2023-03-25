import React, { useState } from 'react';

import './ExpenseForm.css';


function ExpenseForm(props) {
    //State is stored and survives any rerendering of the component
    //This isn't terrible. You will see it like this although it is verbose...
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');

    // const titleChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value);
    // }
    // const amountChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value);
    // }
    // const dateChangeHandler = (event) => {
    //     setEnteredTitle(event.target.value);
    // }

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {

        // No good! You shouldn't do this instead do the following.
        //This might call an outdated snapshot
        // setUserInput({
        //     ...userInput, //spreads object across the value
        //     enteredTitle: event.target.value, //changes the enteredTitle
        // })

        //prevState calls the state before, ALWAYS calls the latest snapshot
        //Memorize: if your state object depends on the previous state you should use this form. Otherwise you might get errors or outdated errors
        setUserInput((prevState) => {
            return { ...prevState, enteredTitle: event.target.value };
        });
    }

    const amountChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })
        setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value };
        });
    }
    const dateChangeHandler = (event) => {
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
        setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        });
    }


    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        });
    };


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
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;