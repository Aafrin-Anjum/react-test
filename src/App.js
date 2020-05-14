import React, { Component } from 'react';
//import Radium, {StyleRoot}from 'radium';
import './App.css';

import Person from './components/Person/Person';


class App extends Component{
  state={
    persons : [
      {id : "AAA",name :"Aafrin", age : 25},
      {id : "BBB",name :"nikita", age : 25},
      {id : "CCC",name :"Rehana", age : 42}
    ],
    showPersons:false
  }

  // switchNameHandler= (newName) =>{
  //   this.setState({
  //     persons : [
  //       {name :newName, age : 25},
  //       {name :"nikita", age : 25},
  //       {name :"Rehana", age : 42}
  //     ]
  //   })
  // }

  deletePersonHandler=(personIndex)=>{
    //const person = this.state.persons;
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({
      persons : person
    })

  }

  nameChangeHandler=(event, id)=>{
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons : persons
      //  [
      //   {name :"Aafrin", age : 25},
      //   {name :event.target.value, age : 25},
      //   {name :"Rehana", age : 42}
      // ]
    })
  }

  togglePersonsHandler =()=>{
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons : !doesShow
    })
  }


  render(){
    const buttonStyle = {
      backgroundColor : "green",
      color: "white",
      font : "inherit",
      border : '1px solid blue',
      padding : "10px",
      cursor :"pointer",
     /*  ':hover':{
        backgroundColor : "lightgreen",
        color : "black"
      } */
    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) =>{
            return <Person 
            key = {person.id}
            click = {()=>this.deletePersonHandler(index)} 
            name ={person.name}
            age = {person.age}
            change =  {(event)=>this.nameChangeHandler(event, person.id)}
            />
          })}
          {/* <Person  
            name = {this.state.persons[0].name} 
            age = {this.state.persons[0].age}/>
          <Person  
            name = {this.state.persons[1].name} 
            age = {this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, "Puchu!")}
            change={this.nameChangeHandler}>My Hobbies : Chilling </Person>
          <Person  
            name = {this.state.persons[2].name} 
            age = {this.state.persons[2].age}/> */}
        </div>
        );
        buttonStyle.backgroundColor = "red"
        /* buttonStyle[':hover']={
          backgroundColor : "salmon",
          color : "black"
        } */

    }
    //let classes = ['red', 'bold'].join(' ');
    const classes = [];
    if (this.state.persons.length<=2){
      classes.push('red');
    }
    if (this.state.persons.length<=1){
      classes.push('bold');
    }
  return (
    //<StyleRoot>
    <div  className ="App">

      <h1>Hi I am react app</h1>
      <p className = {classes.join(' ')}>This is really Working!!</p>
     {/* <Spreadrest /> */}
     <br></br>
     <br></br>
     <button  
     //className ="Button"
     style = {buttonStyle}
      onClick={this.togglePersonsHandler}>Toggle persons</button>
      {/* {this.state.showPersons === true ? 
        <div>
          <Person  
            name = {this.state.persons[0].name} 
            age = {this.state.persons[0].age}/>
          <Person  
            name = {this.state.persons[1].name} 
            age = {this.state.persons[1].age} 
            click={this.switchNameHandler.bind(this, "Puchu!")}
            change={this.nameChangeHandler}>My Hobbies : Chilling </Person>
          <Person  
            name = {this.state.persons[2].name} 
            age = {this.state.persons[2].age}/>
        </div> : null
      } */}
      {persons}
     
    </div>
    //</StyleRoot>

  );
}
}

export default
// Radium(
  App
  //)
  ;
