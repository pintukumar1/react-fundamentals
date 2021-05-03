import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is actually working!</p>
        <Person name="Pintu" age="22">My Hobbies: Playing Chess</Person>
        <Person name="Mantu" age="24"/>
        <Person name="Vishal" age="18"/>
      </div>
    )

    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi,I am a React app'))
  } 
}

export default App;
