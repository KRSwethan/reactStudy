import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2019");

  const onFilterChangeHandler = yearSelected => {
    setFilteredYear(yearSelected);
  };

  return (
    <div>
      <Card className="expense-div">
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={onFilterChangeHandler}
        />

        {props.expenseDetails
          .filter(expense => expense.date.getFullYear() == filteredYear)
          .map(expense => (
            <ExpenseItem
              key={expense.id}
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
