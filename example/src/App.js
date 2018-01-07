import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Awesome from 'react-ckeditor5';
class App extends Component {
  state = {
    value: 'hello',
  };
  onChange = value => {
    console.log(value);
  };
  render() {
    return (
      <div>
        <div className="App-intro">
          <Awesome />
        </div>
        <p className="App-intro">Another Below</p>
        <Awesome value={this.state.value} onChange={this.onChange} />
      </div>
    );
  }
}

export default App;
