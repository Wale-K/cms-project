import React, { useRef } from "react";

export const Button = () => {
  const counterRef = useRef(0);

  counterRef.current += 1;

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid grey" }}>
      <button>A Button </button> (rendered {counterRef.current} times)
    </div>
  );
};
