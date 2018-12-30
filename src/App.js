import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Radium from 'radium';

class App extends Component {

  state = {

    persons: [
      { name: "vamsi", age: 28 },
      { name: "krishna", age: 26 },
      { name: "Koduri", age: 27 },
    ],

    showPersons: false

  }

  toggleShowPersons = () => {

    let currentValue = this.state.showPersons;

    this.setState({ showPersons: !currentValue });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({ persons });
  }

 updateNameHandler = (event,personIndex) =>{

  const persons = [...this.state.persons];
  persons[personIndex].name = event.target.value;
  this.setState({persons});



 }

  render() {

    let persons = null;

    const style ={
      backgroundColor : 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover':{
        backgroundColor: 'black',
        color: 'yellow'

      }
    }

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => 
          <Person index = {index} name={person.name} age={person.age} click = {this.deletePersonHandler} changeHandler= {this.updateNameHandler} />)}
        </div>
      );

    }

    return (
      <div className="App">
        <button  style ={style} onClick={this.toggleShowPersons}>Show Persons</button>
        {persons}
      </div>
    );
  }
}

export default Radium(App);
