import React from "react";

const Checkbox = ({ id, onChange, ...otherProps }) => {
  return (
    <input
      type="checkbox"
      onClick={(e) => onChange(id, e.target.checked)}
      {...otherProps}
    />
  );
};

export default Checkbox;
