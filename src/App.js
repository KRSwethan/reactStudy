import Expenses from "./components/Expenses";

function App() {
  const expenses = [
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

  return (
    <div>
      <h2>Let's get started!</h2>
      <p>This is also Visible</p>
      <Expenses expenseDetails = {expenses}/>
    </div>
  );
}

export default App;
