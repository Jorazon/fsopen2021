import axios from "axios";
import React from "react";

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
					`${existing.name} is already added to phonebook, replace the opld number with a sew one?`,
				)
			) {
				axios
					.put(`http://localhost:3001/persons/${existing.id}`, {
						...existing,
						number: newNumber,
					})
					.then((response) => {
						setPersons(persons.map((p) => (p.id !== existing.id ? p : response.data)));
						showNotification(`Changed number of ${response.data.name}`, "green");
					})
					.catch(() =>
						showNotification(`Number change of ${response.data.name} failed`, "red"),
					);
			}
			return;
		}
		const newPerson = {
			name: newName,
			number: newNumber,
		};
		axios.post("http://localhost:3001/persons", newPerson).then((response) => {
			setPersons(persons.concat(response.data));
			showNotification(`Added ${response.data.name}`, "green");
		});
		setNewName("");
		setNewNumber("");
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
