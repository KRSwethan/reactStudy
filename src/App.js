import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense.js";
//import ExpenseFilter from "./components/Expenses/ExpenseFilter.js";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 300,
    date: new Date(2022, 5, 30)
  },
  {
    id: "e2",
    title: "Cloths",
    amount: 200,
    date: new Date(2022, 3, 1)
  },
  {
    id: "e3",
    title: "Recharge Bills",
    amount: 100,
    date: new Date(2022, 3, 1)
  },
  {
    id: "e4",
    title: "Council Tax Latest",
    amount: 155,
    date: new Date(2022, 3, 3)
  }
];

const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const onAddNewExpenseHandler = (expenseData) => {
    //setExpenses([expenseData, ...expenses]);
    setExpenses((previousState) => {
      return ([expenseData, ...previousState]);
    });
    //console.log(expenses);
  };

  return (
    <div>
      <NewExpense onAddNewExpense={onAddNewExpenseHandler}/>
      <Expenses expenseDetails = {expenses}/>
    </div>
  );
}

export default App;
