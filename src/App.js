import React, { Component } from 'react'

// import logo from "./logo.svg";
import './App.css'

import { Header } from './Header'
import { Action } from './Action'
import { Options } from './Options'
import { AddOption } from './AddOption'
class App extends Component {
  state = { options: [] }
  handleAddOption = option => {
    if (!option) {
      console.log('enter valid option')
      return 'Enter a valid option'
    } else if (this.state.options.includes(option)) {
      return `${option} already exits`
    }
    this.setState(prevState => {
      return { options: prevState.options.concat(option) }
    })
  }
  handleRemoveAll = () => {
    this.setState({ options: [] })
  }
  handleRemoveOption = option => {
    const found = this.state.options.includes(option)
    if (found) {
      this.setState(prevState => {
        return { options: prevState.options.filter(opt => opt !== option) }
      })
    }
  }
  componentDidMount() {
    const json = localStorage.getItem('options')
    const options = JSON.parse(json)
    if (options) {
      //set initial state
      // const initialState = JSON.parse(options)
      this.setState({ options })
    } else {
      const initialOptions = JSON.stringify({ options: [] })
      localStorage.setItem('options', initialOptions)
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json)
    }
  }

  render() {
    return (
      <div>
        <Header numberOfOptions={this.state.options.length} />
        <Action options={this.state.options} />
        <Options
          options={this.state.options}
          removeAllOptions={this.handleRemoveAll}
          removeOption={this.handleRemoveOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    )
  }
}

export default App
