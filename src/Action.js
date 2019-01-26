import React from 'react'

class Action extends React.Component {
  constructor(props) {
    super(props)
    this.onMakeDecision = this.onMakeDecision.bind(this)
  }

  onMakeDecision() {
    const randomNumber = Math.floor(Math.random() * this.props.options.length)
    alert(this.props.options[randomNumber])
  }

  render() {
    return (
      <button
        disabled={this.props.options.length === 0}
        onClick={this.onMakeDecision}
      >
        What should I do
      </button>
    )
  }
}
export { Action }
