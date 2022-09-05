import React from "react";

const Button = ({ children, className, ...argument }) => {
  return (
    <button
      {...argument}
      className={`cursor-pointer bg-sky-500 text-white px-3 py-1 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
