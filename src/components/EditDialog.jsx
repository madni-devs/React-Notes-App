function Dialog({ isOpen, setOpen, data, setData, noteData, setNoteData }) {
	if (!isOpen) return null;

	const noteId = Date.now();
	const curDate = new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "short",
		year: "numeric"
	}).format(new Date());

	return (
		<div className="add-dialog">
			<div className="dialog-cont">
				<div className="dialog-div">
					<input
						type="text"
						placeholder="Title"
						maxLength="20"
						className="dialog-title"
						value={data.title}
						onChange={e => setData({ ...data, title: e.target.value })}
					/>
					<textarea
						className="dialog-body"
						placeholder="Note"
						value={data.body}
						onChange={e => setData({ ...data, body: e.target.value })}
					></textarea>
					<div className="dialog-btn-div">
						<a
							className="btn discard-btn"
							onClick={() => {
								setOpen(false);
							}}
						>
							Discard
						</a>
						<a
							className="btn save-btn"
							onClick={() => {
								setNoteData([
									...noteData,
									{
										title: data.title,
										body: data.body,
										date: curDate,
										id: noteId,
										checked: false
									}
								]);
								setOpen(false);
								localStorage.setItem("noteData", JSON.stringify(noteData));
								
							}}
						>
							Save
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dialog;
