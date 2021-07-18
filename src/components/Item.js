import React from "react";
import Field from "./Field";

const Item = ({ order, handleChange }) => {
  const fields = ["Name", "Price", "Amount", "Unit"];
  const itemFields = fields.map((field) => order + field);
  return (
    <table>
      <thead>
        <tr>
          <th>Item One</th>
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
      </tbody>
    </table>
  );
};

export default Item;
