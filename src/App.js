
import React from 'react';

function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState(null);

  // const reducer = (state = [], action) => {
  //   switch (action.type) {
  //     case 'ADD': return [...state, action.text];

  //     default: return state;
  //   }
  // };

  // const [todos, dispatch] = React.useReducer(reducer);


  return (
    <div className="App" style={{ padding: 15 }}>
      <h1>useState vs useReducer</h1>
      <div>
        <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} />
        <button onClick={() => {
          setTodos((oldVal) => {
            return [...oldVal, input]
          })
          setInput("");
        }}>Add</button>
        {/* <button onClick={() => {
            dispatch({ type: 'ADD', text: input })
            setInput("")
          }}>Add</button> */}
      </div>

      <div>
        {todos.map((item) => {
          return <li>{item}</li>
        })}
      </div>
    </div>
  );
}

export default App;
