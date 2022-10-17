import { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

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
      const contacts = { name: newName, number: newNumber };
      setPersons(persons.concat(contacts));
      setNewName("");
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
    // console.log(event);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} /> <br />
          number: <input value={newNumber} onChange={handleNumberChange} />{" "}
          <br />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <h1>
        {persons.map((e) => (
          <p>
            {e.name} - {e.number}
          </p>
        ))}
      </h1>
    </div>
  );
};

export default App;
