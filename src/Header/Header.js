import { header, header__title, header__subtitle } from './Header.module.scss'
import {container} from '../sharedStyles/_container.module.scss';
import React from 'react'
const Header = props => (
  <div className={header}>
    <div className={container}>
      <h1 className={header__title}>Indecision App</h1>
      <h1 className={header__subtitle}>
        Put your life in the hands of a computer
      </h1>
      {/* {props.numberOfOptions > 0 && (
        <h2 className={header__subtitle}>Here are your options</h2>
      )} */}
    </div>
  </div>
)
export { Header }
