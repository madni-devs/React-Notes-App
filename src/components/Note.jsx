import { useState } from "react";
import Dialog from "./Dialog.jsx";

function Note({ note, noteData, setNoteData, display, checked, toggleCheck }) {
	const [open, setOpen] = useState(false);
	const [data, setData] = useState({ title: note.title, body: note.body });

	function editNote() {
		setOpen(true);
	}

	return (
		<>
			<div className="note" id={note.id}>
				<h3 className="note-title">{note.title}</h3>
				<p className="note-body">{note.body}</p>
				<p className="note-date">{note.date}</p>
				<input
					type="checkbox"
					className="delete-checkbox"
					checked={note.checked}
					onChange={() => {
						toggleCheck(note.id);
					}}
					style={{ display: display }}
				/>
				<p className="note-edit" onClick={editNote}>
					edit
				</p>
			</div>
			<Dialog
				isOpen={open}
				setOpen={setOpen}
				data={data}
				setData={setData}
				noteData={noteData}
				setNoteData={setNoteData}
			/>
		</>
	);
}

export default Note;
