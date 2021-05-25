// import React from 'react' class ต้อง extents React.Component
import React, { Component } from 'react'
import './App.css';
import style_module from './mystyle.module.css' 
import './mysass.scss'

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
      username:'',
      age:null,
      myCar:'Honda',
      description:'The context of a textarea goes in the value of attribute',
      errormessage:''
    }
  }

  myChangeHandler = (event) =>{
    this.setState({username: event.target.value})
  }
  myChangeH_multi = (event) =>{
    let myName = event.target.name
    let val = event.target.value
    let err =''
    if(myName === 'age'){
      if(val !== "" && !Number(val)){
        err = <strong style={{color : 'red'}}> Your age must be a number</strong>
      }
    }
    this.setState({errormessage : err})
    this.setState({[myName]: val})
  }

  mySubmitHandler = (event) => {
    event.preventDefault(); // ป้องกันหน้าจอ refresh
    let age = this.state.age
    if(!Number(age)){
      alert('Your age must be a number')
    }
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

    <form>
      <h1>Hello Multiple fields {this.state.username} {this.state.age} {this.state.car}</h1>
      <p>Enter your name</p>
      <input type="text" name="username" onChange={this.myChangeH_multi}></input>
      <p>Enter your age</p>
      <input type="text" name="age" onChange={this.myChangeH_multi} />
      {this.state.errormessage}
      <textarea value = {this.state.description} />
      <select value = {this.state.myCar}>
        <option value="Ford">Ford</option>
        <option value="Honda">Honda</option>
        <option value="Lambo">Lambo</option>
      </select>
      <input type="submit" />
    </form>
    </>
    )
  }
}

// !Style test
class StylesEx extends Component{
  constructor(props) {
    super(props);
// this.state = {}
  }

  render(){
    const myStyle = {
      color:"white",
      backgroundColor:"darkgreen",
      padding: "10px",
      fontFamily:"Arial"
    }
    return(
    <>
      {/* Inline Styling */}
      <h1 style={{color : "darkblue"}}>Hello styles!</h1>
      {/* camelCase property name */}
      <p style={{backgroundColor:"salmon"}}>Add a little style</p>
      {/* Styling with javascript object */}
      <h1 style={myStyle}>This is using javascript object styling</h1>
      {/* Import App.css */}
      <div className="div1">
        Some text
      </div>
      {/* Style Module */}
      <h1 className={style_module.bigBlue}>Hello CSS Module</h1>
      {/* Using Sass for styling*/}
      <div className="box">
        <h1>This is a title</h1>
        <p>This is a paragraph</p>
      </div>

    </>
    );
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
      
      {/* Style Example */}
      <StylesEx />

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

