import React from 'react'
import { bigBtn } from './Action.module.scss'
const Action = props => (
  <button
    className={bigBtn}
    disabled={props.show}
    onClick={props.onMakeDecision}
  >
    What should I do
  </button>
)

export { Action }
