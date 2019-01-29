import React from 'react'
import {
  add_option_error,
  add_option,
  add_option__input, 
  button
} from './AddOption.module.scss'
class AddOption extends React.Component {
  state = { error: '' }
  onFormSubmit = event => {
    event.preventDefault()
    const option = event.target.elements.option.value
    event.target.elements.option.value = ''
    const error = this.props.handleAddOption(option)
    this.setState({ error })
    if (!error) {
      event.target.elements.option.value = ''
    }
  }

  render() {
    return (
      <div >
        {this.state.error && <p className={add_option_error}>{this.state.error}</p>}
        <form className={add_option} onSubmit={this.onFormSubmit}>
          <input className={add_option__input} type="text" name="option" id="option" />
          <button class={button} type="submit">Add option</button>
        </form>
      </div>
    )
  }
}

export { AddOption }
