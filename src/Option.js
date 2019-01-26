import React from "react";
const Option = props => (
  <div>
    <li>{props.opt}</li>
    <button onClick={() => props.remove(props.opt)}>X</button>
  </div>
);

export { Option };
