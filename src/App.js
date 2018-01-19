import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculator from './Calculator.js';
import calculate from './logic/calculate';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }
  onClick = (buttonName) =>{
    this.setState(calculate(this.state, buttonName));
  }
  render() {
    return (
      <div className="container">
  <h1>Add with React!</h1>
  <div className="add">
    <input type="text" />
    <span>+</span>
    <input type="text" />
    <span>=</span>
  <h3></h3>
    <button className="btn btn-primary" onClick={this.add}>ADD</button>
    <button className="btn btn-primary" onClick={this.subtract}>SUBTRACT</button>
    <button className="btn btn-primary" onClick={this.multiply}>MULTIPLY</button>
    <button className="btn btn-primary" onClick={this.divide}>DIVIDE</button>
  </div>
  </div>
    );
  }
}

export default App;
