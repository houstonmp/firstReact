import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import "./Expenses.css"

function Expenses(props) {

    //Attempt to add ExpenseItem components dynamically
    // const renderExpenseItem = () => {
    //     return props.expenseArr.map((el) => {
    //         const current = <ExpenseItem id={el.id} title={el.title
    //         } amount={el.amount} date={el.date} />;
    //         return current;
    //     });

    // }

    return (
        <Card className="expenses">
            {/* {renderExpenseItem()} */}
            <ExpenseItem title={props.expenseArr[0].title} amount={props.expenseArr[0].amount} date={props.expenseArr[0].date}></ExpenseItem>
            <ExpenseItem title={props.expenseArr[1].title} amount={props.expenseArr[1].amount} date={props.expenseArr[1].date}></ExpenseItem>
            <ExpenseItem title={props.expenseArr[2].title} amount={props.expenseArr[2].amount} date={props.expenseArr[2].date}></ExpenseItem>
            <ExpenseItem title={props.expenseArr[3].title} amount={props.expenseArr[3].amount} date={props.expenseArr[3].date}></ExpenseItem>
        </Card>
    );
}

export default Expenses;