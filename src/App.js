import "./App.css";
import { React, useState } from "react";

function App() {
  const [firstItem, setFirstItem] = useState({
    name: "",
    price: 0,
    amount: 0,
    unit: "",
  });
  const [secondItem, setSecondItem] = useState({
    name: "",
    price: 0,
    amount: 0,
    unit: "",
  });
  const [firstResult, setFirstResult] = useState({
    name: "",
    price: 0,
    unit: "",
  });
  const [secondResult, setSecondResult] = useState({
    name: "",
    price: 0,
    unit: "",
  });
  const [result, setResult] = useState("");

  const compareItems = () => {
    console.log("compareItems");
    setFirstItem({
      name: document.getElementById("firstName").value,
      price: document.getElementById("firstPrice").value,
      amount: document.getElementById("firstAmount").value,
      unit: document.getElementById("firstUnit").value,
    });
    console.log("firstItem", firstItem);
    setSecondItem({
      name: document.getElementById("secondName").value,
      price: document.getElementById("secondPrice").value,
      amount: document.getElementById("secondAmount").value,
      unit: document.getElementById("secondUnit").value,
    });
    console.log("secondItem", secondItem);
    computeResult();
  };
  const computeResult = () => {
    console.log("computeResult");
    setFirstResult({
      name: firstItem.name,
      price: firstItem.price / firstItem.amount,
      unit: firstItem.unit,
    });
    console.log("firstResult", firstResult);
    setSecondResult({
      name: secondItem.name,
      price: secondItem.price / secondItem.amount,
      unit: secondItem.unit,
    });
    console.log("secondResult", secondResult);
    setResult(`
    ${firstResult.name} costs ${firstResult.price}/${firstResult.unit}\n
    ${secondResult.name} costs ${secondResult.price}/${secondResult.unit}`);
    console.log("result", result);
  };

  return (
    <>
      <h1>Shopping Tool</h1>
      <div>
        <h2>Item One</h2>
        <div>
          <label for="firstName">Name</label>
          <input id="firstName" />
        </div>
        <div>
          <label for="firstPrice">Price</label>
          <input id="firstPrice" />
        </div>
        <div>
          <label for="firstAmount">Amount</label>
          <input id="firstAmount" />
        </div>
        <div>
          <label for="firstUnit">Unit</label>
          <input id="firstUnit" />
        </div>
        <h2>Item Two</h2>
        <div>
          <label for="secondName">Name</label>
          <input id="secondName" />
        </div>
        <div>
          <label for="secondPrice">Price</label>
          <input id="secondPrice" />
        </div>
        <div>
          <label for="secondAmount">Amount</label>
          <input id="secondAmount" />
        </div>
        <div>
          <label for="secondUnit">Unit</label>
          <input id="secondUnit" />
        </div>
        <button id="compare" onClick={compareItems}>
          Compute
        </button>
      </div>
      <div>
        <h2>Result</h2>
        <h3>{result}</h3>
        <p></p>
      </div>
    </>
  );
}

export default App;
