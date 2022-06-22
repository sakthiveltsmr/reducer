import "./App.css";

function App() {
  const Shopingcart = [
    { id: 3, item: "bread", cost: 30 },
    { id: 1, item: "milk", cost: 22 },
    { id: 2, item: "curd", cost: 10 },
  ];

  const data = Shopingcart.reduce((accumlater, currentvalue, indexof) => {
    return (accumlater = currentvalue.item);
  }, {});
  console.log("datas", data);
  return (
    <div className="App">
      <p>{data}</p>
    </div>
  );
}

export default App;
