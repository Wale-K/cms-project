import React, { useRef } from "react";
import { Button } from "./Button";

let renderNum = 0;
export const App = () => {
  const counterRef = useRef(0);

  counterRef.current += 1;

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid grey" }}>
      Hello React! (rendered {counterRef.current} times)
      <Button />
    </div>
  );
};
