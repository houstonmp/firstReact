import ExpenseItem from './ExpenseItem';
import "./Expenses.css"

function Expenses(props) {
    return (
        <section className="expenses">
            <ExpenseItem title={props.expenseArr[0].title} amount={props.expenseArr[0].amount} date={props.expenseArr[0].date}></ExpenseItem>
            <ExpenseItem title={props.expenseArr[1].title} amount={props.expenseArr[1].amount} date={props.expenseArr[1].date}></ExpenseItem>
            <ExpenseItem title={props.expenseArr[2].title} amount={props.expenseArr[2].amount} date={props.expenseArr[2].date}></ExpenseItem>
            <ExpenseItem title={props.expenseArr[3].title} amount={props.expenseArr[3].amount} date={props.expenseArr[3].date}></ExpenseItem>
        </section>
    );
}

export default Expenses;