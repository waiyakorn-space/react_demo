const styles ={
  color: "green",
  fontStyle:"italic"
}
const str = <h1 style={styles}>Learn JSX</h1>

function greeting(name) {
  return `Hello, ${name}`
}

function App() {
  return (
    <div className="App">
      {str}
      {greeting('John')}
    </div>
  );
}

export default App;
