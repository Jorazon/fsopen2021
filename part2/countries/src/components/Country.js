import React, { useState, useEffect } from "react";

import axios from "axios";

const Country = ({ country }) => {
	const [weather, setWeather] = useState(null);

	const wind = [
		"Undefined",
		"Below 0.3m/s",
		"0.3-3.4m/s",
		"3.4-8.0m/s",
		"8.0-10.8m/s",
		"10.8-17.2m/s",
		"17.2-24.5m/s",
		"24.5-32.6m/s",
		"Over 32.6m/s",
	];

	useEffect(() => {
		setWeather(null);
		const url = `http://www.7timer.info/bin/api.pl?lon=${country.latlng[1]}&lat=${country.latlng[0]}&output=json&product=civil`;
		axios.get(url).then((response) => {
			setWeather(response.data.dataseries[0]);
		});
	}, [country]);

	console.log(weather);

	return (
		<>
			<h2>{country.name}</h2>
			capital {country.capital}
			<br />
			population {country.population}
			<br />
			<h3>Spoken languages</h3>
			<ul>
				{country.languages.map((language) => {
					return <li>{language.name}</li>;
				})}
			</ul>
			<img src={country.flag} alt={`Flag of ${country.name}`} width={"100px"} />
			{weather && (
				<>
					<h3>Weather in {country.capital}</h3>
					<b>temperature: </b>
					{weather.temp2m} Celcius
					<br />
					<b>wind: </b>
					{wind[weather.wind10m.speed]}
					{" direction "}
					{weather.wind10m.direction}
				</>
			)}
		</>
	);
};

export default Country;
