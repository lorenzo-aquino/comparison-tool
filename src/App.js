import "./App.css";
import Instructions from "./components/Instructions";
import Item from "./components/Item";
import Result from "./components/Result";
import {
  alignItems,
  compareItems,
  validateComparison,
} from "./apis/Comparison";
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
  const [result, setResult] = useState({
    costEffective: "",
    better: {},
    worse: {},
  });
  const [comparisonValidity, setComparisonValidity] = useState(true);

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

  const compare = (event) => {
    event.preventDefault();
    const comparisonIsValid = validateComparison(firstItem, secondItem);
    if (comparisonIsValid) {
      const alignedItems = alignItems(firstItem, secondItem);
      computeResult(alignedItems);
    } else {
      setComparisonValidity(false);
    }
  };

  const computeResult = (items) => {
    setComparisonValidity(true);
    const comparisonResult = compareItems(items);
    const first = items[0];
    const second = items[1];
    const computedResult =
      comparisonResult === 1
        ? {
            costEffective: first.name,
            better: first,
            worse: second,
          }
        : {
            costEffective: second.name,
            better: second,
            worse: first,
          };
    setResult(computedResult);
  };

  return (
    <>
      <h1>Shopping Comparison Tool</h1>
      <Instructions />
      <form onSubmit={compare}>
        <Item order="first" handleChange={handleChange} />
        <Item order="second" handleChange={handleChange} />
        <button type="submit">Compute</button>
      </form>
      <Result result={result} valid={comparisonValidity} />
    </>
  );
};

export default App;
