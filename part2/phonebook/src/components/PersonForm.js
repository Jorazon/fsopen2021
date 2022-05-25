import React from "react";
import personService from "../services/personService";

const PersonForm = ({ personsState, nameState, numberState, showNotification }) => {
	const [persons, setPersons] = personsState;
	const [newName, setNewName] = nameState;
	const [newNumber, setNewNumber] = numberState;

	const addPerson = (event) => {
		event.preventDefault();
		const existing = persons.find((person) => person.name === newName);
		if (existing) {
			if (
				window.confirm(
					`${existing.name} is already added to phonebook, replace old number with new?`,
				)
			) {
				personService
					.update(existing, newNumber)
					.then((response) => {
						showNotification(`Changed number of ${response.data.name}`, "green");
						setPersons(persons.map((p) => (p.id !== existing.id ? p : response.data)));
					})
					.catch((error) => showNotification(error.response.data.error, "red"));
			}
			return;
		}
		const newPerson = {
			name: newName,
			number: newNumber,
		};
		personService
			.create(newPerson)
			.then((response) => {
				setPersons(persons.concat(response.data));
				showNotification(`Added ${response.data.name}`, "green");
				setNewName("");
				setNewNumber("");
			})
			.catch((error) => showNotification(error.response.data.error, "red"));
	};

	return (
		<form onSubmit={addPerson}>
			<h2>add a new</h2>
			<div>
				name:{" "}
				<input
					value={newName}
					onChange={(event) => {
						setNewName(event.target.value);
					}}
				/>
			</div>
			<div>
				number:{" "}
				<input
					value={newNumber}
					onChange={(event) => {
						setNewNumber(event.target.value);
					}}
				/>
			</div>
			<div>
				<button onClick={addPerson}>add</button>
			</div>
		</form>
	);
};

export default PersonForm;
