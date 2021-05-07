import React, {Component} from 'react'
import './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      {id:"abc1",   name:"Pintu",age:"22"},
      {id:"abc12",  name:"Mantu",age:"24"}, 
      {id:"abc123", name:"Vishal",age:"18"}
    ],
    otherState: 'Some other Value',
    showPersons: false
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
       return p.id === id
    })
      const person = {...this.state.persons[personIndex] }

      person.name = event.target.value
    
      const persons = [...this.state.persons]
      persons[personIndex] = person
    
      this.setState({persons: persons})     
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
      persons =  <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonsHandler} 
        changed={this.nameChangeHandler} />
    }

  return (
    <div className="App">
      <Cockpit 
          title={this.props.appTitle}
          persons={this.state.persons} 
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler}/>
        {persons}
      </div>
     )
   }
 } 

export default App;
