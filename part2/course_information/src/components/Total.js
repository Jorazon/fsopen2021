import React from "react";

const Total = (props) => {
	return (
		<b>
			total of {props.course.parts.reduce((acc, part) => acc + part.exercises, 0)} exercises
		</b>
	);
};

export default Total;
