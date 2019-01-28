import React from 'react'

const Action = props => (
  <button disabled={props.show} onClick={props.onMakeDecision}>
    What should I do
  </button>
)

export { Action }
