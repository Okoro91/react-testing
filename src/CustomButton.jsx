import React from "react";

const CustomButton = ({ onClick }) => {
  return (
    <div>
      CustomButton
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

export default CustomButton;
