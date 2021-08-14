import React, { useState, useEffect } from "react";
import axios from "axios";
import Note from "./components/Note";

const App = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState("");
	const [showAll, setShowAll] = useState(true);

	useEffect(() => {
		console.log("effect");
		axios.get("http://localhost:3001/notes").then((response) => {
			console.log("promise fulfilled");
			setNotes(response.data);
		});
	}, []);
	console.log("render", notes.length, "notes");

	return (
		<>
			<table>
				<tbody>
					{notes.map((note) => (
						<tr key={note.id}>
							<td>{note.content}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
};

export default App;
