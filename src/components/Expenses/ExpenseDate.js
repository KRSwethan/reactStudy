import './ExpenseDat.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-UK", { month: "long" });
  const date = props.date.toLocaleString("en-UK", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className = "expense-date">
      <div className = "expense-date__month">{month}</div>
      <div className = "expense-date__day">{date}</div>
      <div className = "expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
 