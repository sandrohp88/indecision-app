import React from "react";
import { Option } from "./Option";
const Options = props => (
  <div>
  <button onClick={props.removeAllOptions}>Remove all</button>
    <ol>
      {props.options.map((option, i) => (
        <Option key={option + "__" + i} opt={option} remove={props.removeOption} />
      ))}
    </ol>
  </div>
);
export { Options };
