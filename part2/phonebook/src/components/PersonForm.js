import axios from "axios";
import React from "react";

const PersonForm = ({ personsState, nameState, numberState }) => {
	const [persons, setPersons] = personsState;
	const [newName, setNewName] = nameState;
	const [newNumber, setNewNumber] = numberState;
	const updateNewName = (event) => {
		setNewName(event.target.value);
	};
	const updateNewNumber = (event) => {
		setNewNumber(event.target.value);
	};
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
		axios
			.post("http://localhost:3001/persons", newPerson)
			.then((response) => setPersons(persons.concat(response.data)));
		setNewName("");
		setNewNumber("");
	};
	return (
		<form onSubmit={addPerson}>
			<h2>add a new</h2>
			<div>
				name: <input value={newName} onChange={updateNewName} />
			</div>
			<div>
				number: <input value={newNumber} onChange={updateNewNumber} />
			</div>
			<div>
				<button onClick={addPerson}>add</button>
			</div>
		</form>
	);
};

export default PersonForm;
