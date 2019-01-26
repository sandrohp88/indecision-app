import React from 'react'
const Header = props =>(
  <React.Fragment>
    <h1>Indecision App</h1>
    <p>Put your life in the hands of a computer</p>
    <p>{props.numberOfOptions > 0 && "Here are your options"}</p>

  </React.Fragment>
)

export {Header}