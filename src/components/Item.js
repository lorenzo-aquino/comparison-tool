import React from "react";
import { TextField, Box } from "@material-ui/core";

const Item = ({ order, handleChange }) => {
  const fields = ["Name", "Price", "Amount", "Unit"];
  const itemFields = fields.map((field) => order + field);
  return (
    <Box className="flex-parent after-space">
      <h3>{capitalize(order)} Item</h3>
      {fields.map((field, index) => (
        <TextField
          key={itemFields[index]}
          label={field}
          id="standard-basic"
          name={itemFields[index]}
          onChange={handleChange}
        />
      ))}
    </Box>
  );
};

const capitalize = (word) => {
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalizedWord;
};

export default Item;
