import ExpenseItem from './ExpenseItem';
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className = "expense-div">
      {props.expenseDetails.map(expense => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default Expenses;
