import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

import {Header} from './Header'
import { Action } from "./Action";
import { Options } from "./Options";
import { AddOption } from "./AddOption";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { options: [] };
    this.removeAllHandler = this.removeAllHandler.bind(this);
    this.addOption = this.addOption.bind(this)
    
  }
  addOption(option){
    this.state.options.push(option)
    this.setState({options: this.state.options})
  }
  removeAllHandler() {
    this.setState({ options: [] });
  }
  
  render() {
    return (
      <div>
        <Header />
        <p>{this.state.options.length > 0 && "Here are your options"}</p>
        <Action options={this.state.options}/>
        <button onClick={this.removeAllHandler}>Remove all</button>
        <Options options = {this.state.options}/>
        <AddOption addOption={this.addOption}/>
      </div>
    );
  }
}

export default App;
