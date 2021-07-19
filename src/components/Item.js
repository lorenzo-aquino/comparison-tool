import React from "react";
import Field from "./Field";

const Item = ({ order, handleChange }) => {
  const fields = ["Name", "Price", "Amount", "Unit"];
  const itemFields = fields.map((field) => order + field);
  return (
    <table>
      <thead>
        <tr>
          <th colspan="2">{capitalize(order)} Item</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((field, index) => (
          <Field
            key={itemFields[index]}
            id={itemFields[index]}
            label={field}
            handleChange={handleChange}
          />
        ))}
        <br />
      </tbody>
    </table>
  );
};

const capitalize = (word) => {
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalizedWord;
};

export default Item;
