// import React from 'react' class ต้อง extents React.Component
import React, { Component } from 'react'

//Render Example
const styles = {
  color: "green",
  fontStyle: "italic"
}
const str = <h1 style={styles}>Learn JSX</h1>
const loggedIn = false;
const error1 = true;
const error2 = false;
const items = ['Bread', 'Milk', 'Eggs']
function greeting(name) {
  return `Hello, ${name}`
}

// !Function Component
function FunctionComponent() {
  return <h1>This is a Function Component.</h1>;
}

// !Class Component
class ClassComponent extends Component {
  //this คือ ตัวแทนของcomponent ที่เป็นเจ้าของ method eg.(constructor,render,changeColor,shoot)
  constructor(props) {
    super(props);
    this.state = { 
      brand :'Ford',
      model: 'Mustang',
      color: 'Red',
      year: 2020
    }
    this.shoot_none_arrow = this.shoot_none_arrow.bind(this) //bind this
  }

  // Event handler
  changeColor = () =>{ 
    this.setState({ color: 'Green'});
  }

  shoot_none_arrow() { //ถ้าไม่ทำ arrow function ต้องทำ bind this
    alert(this);
  }
  shoot_nr_pram(a) { //ถ้าไม่ทำ arrow function ต้องทำ bind this
    alert(a);
  }
  shoot_nr_ev(a,b) { //ถ้าไม่ทำ arrow function ต้องทำ bind this
    alert(b.type);
  }
  
  shoot_arrow= () => {
    alert(this);
  }
  shoot_ar_pram = (a) => {
    alert(a);
  }
  shoot_ar_ev = (a,b) => {
    alert(b.type);
  }

  render() {
    return (
    <React.Fragment>
      
    <h1>This is a Class Component.</h1> 
    <p> This is a p tags.</p>

    {/* Props */} 
    {/* <h1>This is a Props. My name is {this.props.firstname} {this.props.lastname}</h1> */}
    <h1>My car name is {this.props.brand.name} Model {this.props.brand.model}</h1>
    
    {/* State */}
    <h1>My Car : {this.state.brand}</h1>
    <ul>
      <li>It is a {this.state.color}</li>
      <li>and model is {this.state.model}</li>
      <li>From {this.state.year}</li>
    </ul>

    {/* Set State */}
    <button onClick={this.changeColor}>Change Color</button>
    <br />

    {/* Event Example */}
    <button onClick={this.shoot_none_arrow}>Take the none arrow shot!</button>
    <button onClick={this.shoot_nr_pram.bind(this,"Goals")}>Take the none arrow shot alert!</button>
    <button onClick={this.shoot_nr_ev.bind(this,"Goals")}>Take the none arrow shot event!</button>
    <br />
    <button onClick={this.shoot_arrow}>Take the arrow shot!</button>
    <button onClick={() => this.shoot_ar_pram("Goal")}>Take the arrow shot alert!</button>
    <button onClick={(ev) => this.shoot_ar_ev("Goal",ev)}>Take the arrow shot event!</button>



    </React.Fragment>
    )
  }
} 

function handleEvent(e) {//Event Handling
  alert('Button clicked')
  console.log(e)
}

// !Form Class Component
class MyForm extends Component{
  constructor(props) {
    super(props);
    this.state = { 
      username:''
    }
  }

  myChangeHandler = (event) =>{
    this.setState({username: event.target.value})
  }

  mySubmitHandler = (event) => {
    event.preventDefault(); // ป้องกันหน้าจอ refresh
    alert("You are submitting " + this.state.username);
  }

  render() {
    let header ="";
    if(this.state.username){
      header = <h1>Hello Conditional Rendering {this.state.username}</h1>
    }else{header = ""}
    return(
    <>
    <form onSubmit={this.mySubmitHandler}>
      <h1>Hello {this.state.username}</h1>
      {header}
      <p>Enter your name: </p>
      <input type="text" onChange={this.myChangeHandler}></input>
      <input type="submit" />
    </form>
    </>
    )
  }

}

function App() {
  //props property 
  const carInfo = {
    name:"Ford",
    model:"Mustang"
  }

  return (
    <div className="App">
      {/* Props */}
      {/* <ClassComponent firstname="john" lastname="Doe"/>
      <ClassComponent firstname="Billy" lastname="Organ"/>
      <ClassComponent firstname="Stan" lastname="Smith"/> */}
      <ClassComponent brand={carInfo}/> 

      {/* Form */}
      <MyForm />

      <FunctionComponent />
      {str}
      {greeting('John')}
      <br />

      {/* Ternary Operator */}
      {(loggedIn) ? 'Welcome back' : 'Nice to meet you'}
      <br /><label>Name: <input /></label>
      {/* case 1 */} {error1 ? <div style={{ color: 'red' }}>Name invalid1</div> : null}
      {/* case 2 */} {!error2 && <div style={{ color: 'red' }}>Name invalid2</div>}

      {/* Loop */}
      <ul>
        {items.map(item => <li>{item}</li>)}
      </ul>

      {/* Event Handling */}
      <button onClick={handleEvent}>Text Click</button>
      
    </div>
  );
}

export default App;
