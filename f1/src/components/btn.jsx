import React from "react";

const Btn = ({ children, className = "", onClick, type = "button" }) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Btn;