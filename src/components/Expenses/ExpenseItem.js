import React, {useState} from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

function Expenseitem(props) { 

  const [title, setTitle] = useState(props.title); //One of React Hooks. Can only be called inside a component function

  const clickHandler = () => {
    setTitle('Updated');
  }
 
  return (
    <Card className='expense-item'>
      <ExpenseDate date = {props.date}/>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}£</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card> 
  );
}

export default Expenseitem;
