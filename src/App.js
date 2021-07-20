import "./App.css";
import { React, useState } from "react";
import { Container, CssBaseline } from "@material-ui/core";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Item from "./components/Item";
import Result from "./components/Result";
import {
  alignItems,
  compareItems,
  validateComparison,
} from "./apis/Comparison";
import Button from "@material-ui/core/Button";

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
    console.log(event.target);
    let inputId = event.target.name;
    if (inputId.startsWith("first")) {
      let prop = inputId.substring(5).toLowerCase();
      const updatedFirstItem = { ...firstItem, [prop]: event.target.value };
      setFirstItem(updatedFirstItem);
    } else {
      let prop = inputId.substring(6).toLowerCase();
      const updatedSecondItem = { ...secondItem, [prop]: event.target.value };
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
      <CssBaseline />
      <Header />
      <Container id="main">
        <Instructions />
        <Container>
          <form onSubmit={compare}>
            <Item order="first" handleChange={handleChange} />
            <Item order="second" handleChange={handleChange} />
            <Button variant="contained" color="secondary" type="submit">
              Compute
            </Button>
          </form>
        </Container>
        <Result result={result} valid={comparisonValidity} />
      </Container>
      <Footer />
    </>
  );
};

export default App;
