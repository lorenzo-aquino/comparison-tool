const massMeasurements = [
  {
    name: "Gram",
    multiplier: 1,
    units: ["gram", "g", "gm", "grams", "gs", "gms"],
  },
  {
    name: "Milligram",
    multiplier: 0.001,
    units: ["milligram", "mg", "milligrams", "mgs"],
  },
  {
    name: "Microgram",
    multiplier: 0.000001,
    units: ["microgram", "mcg", "μg", "micrograms", "mcgs", "μgs"],
  },
  {
    name: "Kilogram",
    multiplier: 1000,
    units: ["kilogram", "kg", "kilograms", "kgs"],
  },
  {
    name: "Ounce",
    multiplier: 28.3495,
    units: ["ounce", "oz", "ounces", "ozs"],
  },
  {
    name: "Pound",
    multiplier: 453.592,
    units: ["pound", "lb", "pounds", "lbs"],
  },
];
const volumeMeasurements = [
  {
    name: "Milliliter",
    multiplier: 1,
    units: ["milliliter", "ml", "milliliters", "mls"],
  },
  { name: "Liter", multiplier: 1000, units: ["liter", "l", "liters", "ls"] },
  {
    name: "Fluid Ounce",
    multiplier: 29.57,
    units: [
      "fluid ounce",
      "oz",
      "fl oz",
      "fl. oz",
      "fl.oz",
      "ozs",
      "fl ozs",
      "fl. ozs",
      "fl.ozs",
    ],
  },
  { name: "Pint", multiplier: 473.176, units: ["pint", "pt", "pints", "pts"] },
  {
    name: "Quart",
    multiplier: 946.353,
    units: ["quart", "qt", "quarts", "qts"],
  },
  {
    name: "Gallon",
    multiplier: 3785.41,
    units: ["gallon", "gal", "gallons", "gals"],
  },
];

const validateUnits = (firstUnit, secondUnit) => {
  const unitsAreMass = isMassUnit(firstUnit) && isMassUnit(secondUnit);
  const unitsAreVolume = isVolumeUnit(firstUnit) && isVolumeUnit(secondUnit);
  if (unitsAreMass || unitsAreVolume) {
    return true;
  }
  return false;
};

const isMassUnit = (unit) => {
  const lowerCaseUnit = unit.toLowerCase();
  for (const measurement of massMeasurements) {
    if (measurement.units.includes(lowerCaseUnit)) {
      return true;
    }
  }
  return false;
};

const isVolumeUnit = (unit) => {
  const lowerCaseUnit = unit.toLowerCase();
  for (const measurement of volumeMeasurements) {
    if (measurement.units.includes(lowerCaseUnit)) {
      return true;
    }
  }
  return false;
};

const alignMeasurements = (first, second) => {
  let firstMeasurement = first;
  let secondMeasurement = second;

  if (
    firstMeasurement.unit.toLowerCase() !== secondMeasurement.unit.toLowerCase()
  ) {
    const alignedValues = alignAmountsAndUnits(
      firstMeasurement,
      secondMeasurement
    );
    firstMeasurement = alignedValues[0];
    secondMeasurement = alignedValues[1];
  } else {
    firstMeasurement.alignedAmount = firstMeasurement.amount;
    firstMeasurement.alignedUnit = firstMeasurement.unit;
    secondMeasurement.alignedAmount = secondMeasurement.amount;
    secondMeasurement.alignedUnit = secondMeasurement.unit;
  }

  return [firstMeasurement, secondMeasurement];
};

const alignAmountsAndUnits = (first, second) => {
  const firstUnitAndMultiplier = getUnitAndMultiplier(first.unit);
  const secondUnitAndMultiplier = getUnitAndMultiplier(second.unit);

  const firstMeasurement = {
    amount: first.amount,
    unit: first.unit,
    alignedAmount: first.amount * firstUnitAndMultiplier.multiplier,
    alignedUnit: firstUnitAndMultiplier.unit,
  };
  const secondMeasurement = {
    amount: second.amount,
    unit: second.unit,
    alignedAmount: second.amount * secondUnitAndMultiplier.multiplier,
    alignedUnit: secondUnitAndMultiplier.unit,
  };

  return [firstMeasurement, secondMeasurement];
};

const getUnitAndMultiplier = (unit) => {
  let found = false;
  let lowerCaseUnit = unit.toLowerCase();
  let unitAndMultiplier = {};

  for (const measurement of massMeasurements) {
    if (measurement.units.includes(lowerCaseUnit)) {
      unitAndMultiplier = {
        unit: massMeasurements[0].name,
        multiplier: measurement.multiplier,
      };
      found = true;
      break;
    }
  }
  if (!found) {
    for (const measurement of volumeMeasurements) {
      if (measurement.units.includes(lowerCaseUnit)) {
        unitAndMultiplier = {
          unit: volumeMeasurements[0].name,
          multiplier: measurement.multiplier,
        };
        found = true;
        break;
      }
    }
  }

  return unitAndMultiplier;
};

export { alignMeasurements, validateUnits };
