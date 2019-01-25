import React from 'react'

class AddOption extends React.Component{
  constructor(props){
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }
  onFormSubmit(event) {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if (option) {
      this.props.addOption(option)
      event.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" id="option" />
          <button type="submit">Add option</button>
        </form>
      </React.Fragment>
    )
  }
}

export {AddOption}