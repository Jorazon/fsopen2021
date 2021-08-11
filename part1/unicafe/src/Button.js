import React from "react";

const StatisticLine = ({ method, text }) => {
	return (
		<>
			<button onClick={method}>{text}</button>
		</>
	);
};

export default StatisticLine;
