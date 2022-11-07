import React from "react";

import ExpnseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
      const enpenseData = {
        ...enteredExpenseData,
        id : Math.random().toString()
      };
      props.onAddNewExpense(enpenseData);
  };
  
  return (
    <div className="new-expense">
      <ExpnseForm onSaveExpenseData = {onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
