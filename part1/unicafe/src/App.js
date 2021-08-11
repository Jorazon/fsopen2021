import React, { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	return (
		<>
			<h2>give feedback</h2>

			<Button method={() => setGood(good + 1)} text="good" />
			<Button method={() => setNeutral(neutral + 1)} text="neutral" />
			<Button method={() => setBad(bad + 1)} text="bad" />

			<Statistics good={good} neutral={neutral} bad={bad} />
		</>
	);
};

export default App;
