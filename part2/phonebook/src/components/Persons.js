import React from "react";

const Persons = ({ persons, listFilter }) => {
	return (
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
	);
};

export default Persons;
