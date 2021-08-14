import React from "react";

const Country = ({ country }) => {
	return (
		<>
			<h2>{country.name}</h2>
			capital {country.capital}
			<br />
			population {country.population}
			<br />
			<h3>languages</h3>
			<ul>
				{country.languages.map((language) => {
					return <li>{language.name}</li>;
				})}
			</ul>
			<img src={country.flag} alt={`Flag of ${country.name}`} width={"100px"} />
		</>
	);
};

export default Country;
