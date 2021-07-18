import "./App.css";
import Item from "./components/Item";
import Result from "./components/Result";
import { React, useState } from "react";

const App = () => {
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
  const firstResult = {
    name: "",
    price: 0,
    unit: "",
  };
  const secondResult = {
    name: "",
    price: 0,
    unit: "",
  };
  const setFirstResult = () => {
    firstResult["name"] = firstItem.name;
    firstResult["price"] = firstItem.price / firstItem.amount;
    firstResult["unit"] = firstItem.unit;
  };
  const setSecondResult = () => {
    secondResult["name"] = secondItem.name;
    secondResult["price"] = secondItem.price / secondItem.amount;
    secondResult["unit"] = secondItem.unit;
  };
  const [result, setResult] = useState({
    costEffective: "",
    better: {},
    worse: {},
  });

  const handleChange = (event) => {
    let inputId = event.target.id;
    if (inputId.startsWith("first")) {
      let prop = inputId.substring(5).toLowerCase();
      const updatedFirstItem = firstItem;
      updatedFirstItem[prop] = event.target.value;
      setFirstItem(updatedFirstItem);
    } else {
      let prop = inputId.substring(6).toLowerCase();
      const updatedSecondItem = secondItem;
      secondItem[prop] = event.target.value;
      setSecondItem(updatedSecondItem);
    }
  };

  const compareItems = () => {
    setFirstResult();
    setSecondResult();
    computeResult();
  };

  const computeResult = () => {
    let computedResult =
      firstResult.price < secondResult.price
        ? {
            costEffective: firstResult.name,
            better: firstResult,
            worse: secondResult,
          }
        : {
            costEffective: secondResult.name,
            better: secondResult,
            worse: firstResult,
          };
    setResult(computedResult);
  };

  return (
    <>
      <h1>Shopping Tool</h1>
      <div>
        <Item order="first" handleChange={handleChange} />
        <Item order="second" handleChange={handleChange} />
        <button id="compare" onClick={compareItems}>
          Compute
        </button>
      </div>
      <Result result={result} />
    </>
  );
};

export default App;
