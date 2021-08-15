import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";

const App = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState("");
	const [showAll, setShowAll] = useState(true);

	useEffect(() => {
		console.log("effect");
		noteService.getAll().then((response) => {
			setNotes(response);
		});
	}, []);
	console.log("render", notes.length, "notes");

	const addNote = (event) => {
		event.preventDefault();
		const noteObject = {
			content: newNote,
			date: new Date(),
			important: Math.random() > 0.5,
		};

		noteService.create(noteObject).then((response) => {
			setNotes(notes.concat(response));
			setNewNote("");
		});
	};

	const toggleImportanceOf = (id) => {
		const note = notes.find((n) => n.id === id);
		const changedNote = { ...note, important: !note.important };

		noteService
			.update(id, changedNote)
			.then((returnedNote) => {
				setNotes(notes.map((n) => (n.id !== id ? n : returnedNote)));
			})
			.catch((error) => {
				alert(`the note '${note.content}' was already deleted from server`);
				setNotes(notes.filter((n) => n.id !== id));
			});
	};

	return (
		<>
			<button onClick={() => setShowAll(!showAll)}>
				{showAll ? "show important" : "show all"}
			</button>
			<ul>
				{notes
					.filter((note) => note.important || showAll)
					.map((note) => (
						<Note
							note={note}
							toggleImportance={() => toggleImportanceOf(note.id)}
							key={note.id}
						/>
					))}
			</ul>
			<form>
				<input value={newNote} onChange={(event) => setNewNote(event.target.value)} />
				<button onClick={addNote}>send</button>
			</form>
		</>
	);
};

export default App;
