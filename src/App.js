import "./App.css";
import { useState } from "react";

function App() {
  //State Hook - useState
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function handleButtonClick() {
    if(!newItem){
      alert("Enter new items...");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
    console.log(item);
  }
  return (
    <div className="App">
      {/* Header */}
      <h1>My Todolist</h1>
      {/* Input(Input and Button) */}
      <input
        type="text"
        placeholder="Add todo..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleButtonClick}>Add</button>
      {/* List of item (unordered list of list item) */}
      <ul>
        {items.map(item => {
          return(
            <li key={item.id}>{item.value}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
