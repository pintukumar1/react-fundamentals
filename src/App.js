import React, {Component} from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {

// const App = props => {
  // const [personsState, setPersonsState] = useState({
  //     persons: [
  //       {name:"Pintu",age:"22"},
  //       {name:"Mantu",age:"24"}, 
  //       {name:"Vishal",age:"18"}
  //     ],
  //     otherState: 'Some other Value'
  // })

  // const [otherState, setOtherState] = useState('Some other Value')
  // console.log(personsState, otherState)
  state = {
    persons: [
      {name:"Pintu",age:"22"},
      {name:"Mantu",age:"24"}, 
      {name:"Vishal",age:"18"}
    ],
    otherState: 'Some other Value',
    showPersons: false
  }

switchNameHandler = (newName) => {
  console.log('Was Clicked!')
  // Don't do this :   this.state.persons[0].name = "Pintu Kumar"
  this.setState({
    persons: [
      {name: newName ,age:"22"},
      {name:"Mantu",age:"24"}, 
      {name:"Vishal",age:"19"}
    ]
  })
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

togglePersonsHandler = () => {
  const doesShow = this.state.showPersons
  this.setState({showPersons: !doesShow})
}

// const switchNameHandler = () => {
//   setPersonsState({
//         persons: [
//           {name:"Pintu Kumar",age:"22"},
//           {name:"Mantu",age:"24"}, 
//           {name:"Vishal",age:"19"}
//         ]
//       })
// }

render() {

  const style = {
    backgroundColor: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer"
  }

  return (
    <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is actually working!</p>
        <button onClick={this.togglePersonsHandler}
        style={style}>Toggle Persons</button>
        {this.state.showPersons ?  
          <div>
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}>My Hobbies: Playing Chess</Person>
          <Person name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Pin2')}
          changed={this.nameChangedHandler}>My Hobbies: Reading Books</Person>
          <Person name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>My Hobbies: Wasting time</Person>
          </div> : null
        }
      </div>
    )
}
// return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi,I am a React app'))
} 

export default App;
