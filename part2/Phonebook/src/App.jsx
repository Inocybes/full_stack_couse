import { useState } from "react";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchName, setSearchName] = useState("");
  const [filter, setFilter] = useState("");

  const addNewName = (event) => {
    event.preventDefault();
    const onePerson = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

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

  const handleFilter = (event) => {
    event.preventDefault();
    filteredPerson(event.target.value);
    setSearchName(event.target.value);
  };

  console.log(filter);

  const filteredPerson = (e) => {
    setFilter(
      persons.filter((value) => {
        return value.name.toLowerCase().includes(e.toLowerCase())
          ? value
          : null;
      })
    );
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search name"
        onChange={handleFilter}
        value={searchName}
      />
      <h2>Phonebook</h2>
      <form onSubmit={addNewName}>
        <div>
          name: <input value={newName} onChange={handleNameChange} /> <br />
          number: <input value={newNumber} onChange={handleNumberChange} />
          <br />
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <h1>
        {filter
          ? filter.map((e) => (
              <div>
                <span>
                  {e.name} - {e.number}
                </span>
              </div>
            ))
          : persons.map((e) => (
              <div>
                <span>
                  {e.name} - {e.number}
                </span>
              </div>
            ))}
      </h1>
    </div>
  );
};

export default App;
