import React, { useState, useEffect } from "react";
import Note from "./components/Note";
import Notification from "./components/Notificatio";
import noteService from "./services/notes";

const App = () => {
	const [notes, setNotes] = useState([]);
	const [newNote, setNewNote] = useState("");
	const [showAll, setShowAll] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);

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
				setErrorMessage(`Note '${note.content}' was already removed from server`);
				setTimeout(() => {
					setErrorMessage(null);
				}, 5000);
				setNotes(notes.filter((n) => n.id !== id));
			});
	};

	return (
		<>
			<h1>Notes</h1>
			<Notification message={errorMessage} />
			<div>
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
			</div>
		</>
	);
};

export default App;
