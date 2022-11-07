import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {

  const onFilterChangeHandler = (yearSelected) => {
    console.log(yearSelected)
  };

  return (
    <div className="expense-div">
      <ExpenseFilter onFilterChange={onFilterChangeHandler}/>
      <Card className="expense-div">
        {props.expenseDetails.map(expense => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          ></ExpenseItem>
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
