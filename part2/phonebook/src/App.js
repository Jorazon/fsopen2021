import React, { useState } from "react";

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456" },
		{ name: "Ada Lovelace", number: "39-44-5323523" },
		{ name: "Dan Abramov", number: "12-43-234345" },
		{ name: "Mary Poppendieck", number: "39-23-6423122" },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [listFilter, setListFilter] = useState("");

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
	const updateListFilter = (event) => {
		setListFilter(event.target.value);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={addPerson}>
				<div>
					filter shown with <input value={listFilter} onChange={updateListFilter} />
				</div>
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
			<h2>Numbers</h2>
			<ul>
				{persons
					.filter((person) => {
						return person.name.toLocaleLowerCase().includes(listFilter);
					})
					.map((person) => (
						<li key={person.name}>
							{person.name} {person.number}
						</li>
					))}
			</ul>
		</div>
	);
};

export default App;
