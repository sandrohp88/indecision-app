import React from 'react'
import { Option } from '../Option/Option'
import { btn__link } from '../Option/Option.module.scss'
import {
  widget,
  widget__message,
  widget_header,
  widget_header__title
} from './Options.module.scss'
import { button } from '../AddOption/AddOption.module.scss'
const Options = props => (
  <div className={widget}>
    <div className={widget_header}>
      <h3 className={widget_header__title}>Your Options</h3>
      <button className={btn__link} onClick={props.removeAllOptions}>
        Remove all
      </button>
    </div>
    {props.options.length === 0 && (
      <p className={widget__message}>Please add an option to get started!</p>
    )}
    <ol>
      {props.options.map((option, i) => (
        <Option
          key={option + '__' + i}
          opt={option}
          remove={props.removeOption}
        />
      ))}
    </ol>
  </div>
)
export { Options }
