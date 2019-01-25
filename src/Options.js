import React from "react";
import { Option } from "./Option";

class Options extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <ol>
          {this.props.options.map((option, i) => (
            <Option key={option + "__" + i} opt={option} />
          ))}
        </ol>
      </React.Fragment>
    );
  }
}

export {Options}