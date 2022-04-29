import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [
        {
          name: "Harry",
          id: 'abc1'
        },
        {
          name: "Peter",
          id: 'abc2',
        },
        {
          name: "John",
          id: 'abc3',
        },
        {
          name: "Mark",
          id: 'abc4',
        },
      ]
    }
  }
  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map(monster => <h1 key={ monster.id }> { monster.name } </h1>)
        }
      </div>
    )
  }
}

export default App;
