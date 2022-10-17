import { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNewName = (event) => {
    event.preventDefault();
    // console.log("button clicked", event.target);
    const contacts = {name: newName}
    setPersons(persons.concat(contacts))
  };
  const handleNameChange = (event) => {
    // console.log("hello", event.target.value);
    setNewName(event.target.value);
  };
  console.log(persons);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <h1>{persons.map(e=> <p>{e.name}</p>)}</h1>
    </div>
  );
};

export default App;
