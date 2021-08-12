import React from "react";
import Part from "./Part";

const Content = (props) => {
	return (
		<>
			{props.course.parts.map(({ name, exercises, id }) => (
				<Part name={name} exercises={exercises} key={id} />
			))}
		</>
	);
};

export default Content;
