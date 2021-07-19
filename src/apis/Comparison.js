import { alignMeasurements, validateUnits } from "./Measurement";

const validateComparison = (first, second) => {
  const firstPriceIsValid = validatePrice(first.price);
  const secondPriceIsValid = validatePrice(second.price);
  const firstAmountIsValid = validateAmount(first.amount);
  const secondAmountIsValid = validateAmount(second.amount);
  const unitsAreValid = validateUnits(first.unit, second.unit);

  return (
    firstPriceIsValid &&
    secondPriceIsValid &&
    firstAmountIsValid &&
    secondAmountIsValid &&
    unitsAreValid
  );
};

const validatePrice = (price) => price > 0;
const validateAmount = (amount) => amount > 0;

const alignItems = (first, second) => {
  const alignedMeasurements = alignMeasurements(first, second);
  const firstItem = {
    name: first.name,
    price: first.price,
    amount: first.amount,
    unit: first.unit,
    alignedAmount: alignedMeasurements[0].alignedAmount,
    alignedUnit: alignedMeasurements[0].alignedUnit,
  };
  const secondItem = {
    name: second.name,
    price: second.price,
    amount: second.amount,
    unit: second.unit,
    alignedAmount: alignedMeasurements[1].alignedAmount,
    alignedUnit: alignedMeasurements[1].alignedUnit,
  };

  firstItem.value = computeValueOfItem(firstItem);
  secondItem.value = computeValueOfItem(secondItem);

  return [firstItem, secondItem];
};

const compareItems = (items) => {
  const FIRST_IS_LESSER = 1;
  const SECOND_IS_LESSER = -1;

  return items[0].value < items[1].value ? FIRST_IS_LESSER : SECOND_IS_LESSER;
};

const computeValueOfItem = (item) => {
  return (item.price / item.alignedAmount).toPrecision(2);
};

export { alignItems, compareItems, validateComparison };
