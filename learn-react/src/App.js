// import React from 'react' class ต้อง extents React.Component
import React, { Component } from 'react'

const styles = {
  color: "green",
  fontStyle: "italic"
}
const str = <h1 style={styles}>Learn JSX</h1>

function greeting(name) {
  return `Hello, ${name}`
}

const loggedIn = false;
const error1 = true;
const error2 = false;
const items = ['Bread', 'Milk', 'Eggs']

function handleEvent(e) {
  alert('Button clicked')
  console.log(e)
}

function FunctionComponent() {
  return <h1>This is a Function Component.</h1>;
}

class ClassComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
    <React.Fragment>
    {/* <h1>This is a Class Component.</h1> 
    <p> This is a p tags.</p>
    <h1>This is a Props. My name is {this.props.firstname} {this.props.lastname}</h1>
    */}
    <h1>My car name is {this.props.brand.name} Model {this.props.brand.model}</h1>
    
    </React.Fragment>
    )
  }
} 

function App() {
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
