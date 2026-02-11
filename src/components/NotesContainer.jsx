import Note from "./Note.jsx";
import { useRef } from "react";

function NotesContainer({
	noteData,
	setNoteData,
	display,
	setDisplay,
	toggleCheck
}) {
	const timerRef = useRef(null);

	function showDeleteContent() {
		setDisplay("");
	}

	function startPress(e) {
		if (e.target.closest(".note")) {
			timerRef.current = setTimeout(() => showDeleteContent(), 500);
		}
	}
	function endPress() {
		clearTimeout(timerRef.current);
	}

	return (
		<div
			className="your-notes"
			onMouseDown={startPress}
			onMouseUp={endPress}
			onMouseLeave={endPress}
			onTouchStart={startPress}
			onTouchEnd={endPress}
		>
			{noteData.map((note, index, array) => (
				<Note
					key={note.id}
					note={note}
					toggleCheck={toggleCheck}
					noteData={array}
					setNoteData={setNoteData}
					display={display}
				/>
			))}
		</div>
	);
}
export default NotesContainer;
