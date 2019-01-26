import React from "react";

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = { error: "" };
  }
  onFormSubmit(event) {
    event.preventDefault();
    const option = event.target.elements.option.value;

    event.target.elements.option.value = "";
    const error = this.props.addOption(option);
    this.setState({ error });
    if (!error) {
      event.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" id="option" />
          <button type="submit">Add option</button>
        </form>
      </div>
    );
  }
}

export { AddOption };
