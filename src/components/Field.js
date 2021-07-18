import React from "react";

const Field = ({ id, label, handleChange }) => (
  <tr>
    <td>
      <label for={id}>{label}</label>
    </td>
    <td>
      <input id={id} onChange={handleChange} />
    </td>
  </tr>
);

export default Field;
