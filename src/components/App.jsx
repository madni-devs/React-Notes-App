import Search from "./Search.jsx";
import NotesContainer from "./NotesContainer.jsx";
import Dialog from "./Dialog.jsx";
import DeleteBar from "./DeleteBar.jsx";
import { useState, useEffect } from "react";

function App() {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState({ title: "", body: "", id: "" });
	const [noteData, setNoteData] = useState(
		JSON.parse(localStorage.getItem("noteData")) || []
	);
	const [display, setDisplay] = useState("none");
	const [box, setBox] = useState(false);

	useEffect(() => {
		localStorage.setItem("noteData", JSON.stringify(noteData));
	}, [noteData]);

	useEffect(() => {
		let res = JSON.parse(localStorage.getItem("noteData")) || [];
		setNoteData(res);
	}, []);

	function toggleCheck(id) {
		setNoteData(prev =>
			prev.map(note =>
				note.id === id ? { ...note, checked: !note.checked } : note
			)
		);
	}

	function deleteCheckedNotes() {
		setNoteData(prev => {
			const updated = prev.filter(note => !note.checked);
      setDisplay("none")
			return updated;
		});
	}

	return (
		<>
			<div className="App">
				<header>
					<h1 className="main-heading">Notes App</h1>
				</header>
				<Search setOpen={setOpen} />
				<div className="your-notes-head">
					<h2 className="head-title">Your Notes</h2>
				</div>
				<div className="your-notes-cont">
					<NotesContainer
						noteData={noteData}
						setNoteData={setNoteData}
						display={display}
						setDisplay={setDisplay}
						toggleCheck={toggleCheck}
					/>
				</div>
			</div>
			<Dialog
				isOpen={open}
				setOpen={setOpen}
				data={data}
				setData={setData}
				noteData={noteData}
				setNoteData={setNoteData}
			/>
			<DeleteBar display={display} setDisplay={setDisplay} deleteCheckedNotes={deleteCheckedNotes} setNoteData={setNoteData} />
		</>
	);
}

export default App;
