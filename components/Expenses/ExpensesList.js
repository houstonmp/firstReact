import React from "react";

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = props => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return (
        <ul className="expenses-list">
            {
                props.items.map((el) => {
                    //Create an array of ExpenseItems of chosenYear
                    return <ExpenseItem
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        amount={el.amount}
                        date={el.date}
                    />;
                })
            }
        </ul>
    );
}

export default ExpensesList;