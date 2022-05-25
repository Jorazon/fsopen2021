import React from "react";
import personService from "../services/personService";

const Persons = ({ personsState, listFilter, showNotification }) => {
	const [persons, setPersons] = personsState;

	const deletePerson = (id) => {
		const match = persons.find((p) => p.id === id);
		if (window.confirm(`Delete ${match.name}?`)) {
			personService
				.delete(id)
				.then(() => {
					showNotification(`${match.name} was removed`, "green");
				})
				.catch(() => {
					showNotification(
						`Information of ${match.name} has already been removed from the server`,
						"red",
					);
				})
				.finally(() => setPersons(persons.filter((p) => p.id !== id)));
		}
	};

	return (
		<ul>
			{persons
				.filter((person) => {
					return person.name.toLocaleLowerCase().includes(listFilter);
				})
				.map((person) => (
					<li key={person.name}>
						{person.name} {person.number}{" "}
						<button onClick={() => deletePerson(person.id)}>delete</button>
					</li>
				))}
		</ul>
	);
};

export default Persons;
