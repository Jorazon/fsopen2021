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
		setPersons(persons.concat(newPerson));
		setNewName("");
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
				<button type="submit">add</button>
			</div>
		</form>
	);
};

export default PersonForm;
