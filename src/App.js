import React, {Component} from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {name:"Pintu",age:"22"},
      {name:"Mantu",age:"24"}, 
      {name:"Vishal",age:"18"}
    ],
    otherState: 'Some other Value',
    showPersons: false
  }

nameChangedHandler = (e) => {
  this.setState({
    persons: [
      {name:"Pintu", age: "22"},
      {name: e.target.value, age: "24"},
      {name:"Vishal", age:"18"}
    ]
  })
}

deletePersonsHandler = (personIndex) => {
  // const persons = this.state.persons.slice()
  const persons =  [...this.state.persons]
  persons.splice(personIndex, 1)
  this.setState({persons: persons})
}

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons
  this.setState({showPersons: !doesShow})
}

render() {
  let persons = null
  if(this.state.showPersons){
    persons =  (
    <div>
      {this.state.persons.map((person, index) => {
        return <Person
        click={() => this.deletePersonsHandler(index)} 
        name={person.name} 
        age={person.age}/>
      })}
    </div>
    )
  }

  return (
    <div class="App">
        <h1>Hi, I am a React App</h1>
        <p>This is actually working!</p>
        <button onClick={this.togglePersonsHandler}
        class="BtnStyle">Toggle Persons</button>
        {persons}
      </div>
    )
  }
} 

export default App;
