import React from "react";

const Persons = ({ persons, listFilter, deletePerson }) => {
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
