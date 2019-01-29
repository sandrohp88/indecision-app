import React from 'react'
import { option, option__text, btn__link } from './Option.module.scss'
const Option = props => (
  <div className={option}>
    <li className={option__text}>{props.opt}</li>
    <button className={btn__link} onClick={() => props.remove(props.opt)}>remove</button>
  </div>
)

export { Option }
