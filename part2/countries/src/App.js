import React, { useState, useEffect } from "react";

import axios from "axios";

import Countries from "./components/Countries";

const App = () => {
	const [countries, setCountries] = useState([]);
	const [search, setSearch] = useState("");
	useEffect(() => {
		axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
			setCountries(response.data);
		});
	}, []);
	return (
		<>
			<form>
				find countries{" "}
				<input value={search} onChange={(event) => setSearch(event.target.value)} />
				<Countries countries={countries} searchState={[search, setSearch]} />
			</form>
		</>
	);
};

export default App;
