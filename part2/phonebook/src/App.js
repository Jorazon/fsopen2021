import React, { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arto Hellas", number: "040-1234567" }]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const addPerson = (event) => {
		event.preventDefault();
		if (persons.some((person) => person.name === newName)) {
			alert(`${newName} is already added to phonebook`);
			return;
		}
		const newPerson = {
			name: newName,
			number: newNumber,
		};
		setPersons(persons.concat(newPerson));
		setNewName("");
	};
	const updateNewName = (event) => {
		setNewName(event.target.value);
	};
	const updateNewNumber = (event) => {
		setNewNumber(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					name: <input value={newName} onChange={updateNewName} />
				</div>
				<div>
					number: <input value={newNumber} onChange={updateNewNumber} />
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{persons.map((person) => (
					<li key={person.name}>
						{person.name} {person.number}
					</li>
				))}
			</ul>
		</div>
	);
};

export default App;
