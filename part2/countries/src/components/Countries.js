import React from "react";

import Country from "./Country";

const Countries = ({ countries, search }) => {
	const matches = countries.filter((country) =>
		country.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()),
	);
	if (matches.length === 1) {
		return <Country country={matches[0]} />;
	} else if (matches.length <= 10) {
		return (
			<table>
				<tbody>
					{matches.map((country) => {
						return (
							<tr key={country.alpha3Code}>
								<td>{country.name}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	} else {
		return <p>Too many matches, sepecify another filter</p>;
	}
};

export default Countries;
