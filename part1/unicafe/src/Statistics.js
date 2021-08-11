import React from "react";

const Statistics = ({ good, neutral, bad }) => {
	const total = good + neutral + bad;
	return (
		<>
			<h2>statistics</h2>
			{total === 0 ? (
				<p>No feedback given</p>
			) : (
				<p>
					good {good}
					<br />
					neutral {neutral}
					<br />
					bad {bad}
					<br />
					all {total}
					<br />
					average {(good - bad) / total}
					<br />
					positive {(good / total) * 100}%
				</p>
			)}
		</>
	);
};

export default Statistics;
