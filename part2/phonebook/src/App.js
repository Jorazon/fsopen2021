import React, { useState, useEffect } from "react";

import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [listFilter, setListFilter] = useState("");

	useEffect(() => {
		axios.get("http://localhost:3001/persons").then((response) => {
			setPersons(response.data);
		});
	}, []);

	const deletePerson = (id) => {
		if (window.confirm(`Delete ${persons.find((p) => p.id === id).name}?`)) {
			axios.delete(`http://localhost:3001/persons/${id}`).then(() => {
				setPersons(persons.filter((p) => p.id !== id));
			});
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Filter filterState={[listFilter, setListFilter]} />
			<PersonForm
				personsState={[persons, setPersons]}
				nameState={[newName, setNewName]}
				numberState={[newNumber, setNewNumber]}
			/>
			<h2>Numbers</h2>
			<Persons persons={persons} listFilter={listFilter} deletePerson={deletePerson} />
		</div>
	);
};

export default App;
