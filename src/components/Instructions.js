import React from "react";
import { List, CardContent } from "@material-ui/core";

const Instructions = () => (
  <>
    <CardContent>
      <List>
        <h3>Instructions</h3>
        <li>
          Fill in the name, price, amount, and unit of measurement of the two
          items you wish to compare.
        </li>
        <li>This tool currently supports mass and volume comparisons only.</li>
        <li>
          This tool supports the comparison of different units (e.g. 16 fl.oz vs
          500 ml, 5lbs vs 2kg)
        </li>
      </List>
    </CardContent>
  </>
);

export default Instructions;
