function DeleteBar({ display, setDisplay, deleteCheckedNotes, setNoteData }) {
	function cancelDelete() {
		setDisplay("none")
		setNoteData(prev => prev.map(note => ({ ...note, checked: false })));
	}

	return (
		<div className="delete-bar-cont" style={{ display: display }}>
			<div className="delete-bar">
				<div className="bar-btn" onClick={deleteCheckedNotes}>
					<i className="fa-solid fa-trash bar-i"></i>
					<p className="bar-txt">delete</p>
				</div>
				<div className="bar-btn" onClick={cancelDelete}>
					<i className="fa-solid fa-x bar-i"></i>
					<p className="bar-txt">cancel</p>
				</div>
			</div>
		</div>
	);
}

export default DeleteBar;
