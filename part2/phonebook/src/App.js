import React, { useState, useEffect } from "react";

import axios from "axios";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [listFilter, setListFilter] = useState("");
	const [messageText, setMessageText] = useState(null);
	const [messageColor, setMessageColor] = useState("green");

	useEffect(() => {
		axios.get("http://localhost:3001/persons").then((response) => {
			setPersons(response.data);
		});
	}, []);

	const showNotification = (text, color) => {
		setMessageText(text);
		setMessageColor(color);
		setTimeout(() => setMessageText(null), 5000);
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<Notification message={messageText} color={messageColor} />
			<Filter filterState={[listFilter, setListFilter]} />
			<PersonForm
				personsState={[persons, setPersons]}
				nameState={[newName, setNewName]}
				numberState={[newNumber, setNewNumber]}
				showNotification={showNotification}
			/>
			<h2>Numbers</h2>
			<Persons
				personsState={[persons, setPersons]}
				listFilter={listFilter}
				showNotification={showNotification}
			/>
		</div>
	);
};

export default App;
