import React, { Component } from 'react';
import logo from './logo.svg';
import styleClasses from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';



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

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => 
          <ErrorBoundary key ={index} >
             <Person   index = {index} name={person.name} age={person.age} click = {this.deletePersonHandler} changeHandler= {this.updateNameHandler} />
          </ErrorBoundary>
          )}
        </div>
      );

    }

    return (
      <div className={styleClasses.App}>
        <button  style ={styleClasses.button} onClick={this.toggleShowPersons}>Show Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
