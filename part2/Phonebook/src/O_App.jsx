import { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const addNewName = (event) => {
    event.preventDefault();
    const onePerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    console.log(onePerson);
    if (onePerson) {
      alert(`${newName} is already added to phonebook`);
      setNewName("");
    } else {
      const contacts = { name: newName };
      setPersons(persons.concat(contacts));
      setNewName("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

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
      <h1>
        {persons.map((e) => (
          <p>{e.name}</p>
        ))}
      </h1>
    </div>
  );
};

export default App;
