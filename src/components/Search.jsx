import NotesContainer from "./NotesContainer.jsx";

function Search({ setOpen, search, setSearch,noteData, setNoteData, setFilteredNotes  }) {
	function filterNotes(e) {
		setSearch(e.target.value);
		setFilteredNotes(
			noteData.filter(note => {
				const query = e.target.value.toLowerCase();
				return (
					note.title.toLowerCase().includes(query) ||
					note.body.toLowerCase().includes(query)
				);
			})
		);
	}

	return (
		<>
			<main className="main">
				<div className="search-container">
					<i className="fa-solid fa-search search-icon"></i>
					<input
						type="search"
						placeholder="Search Your Note..."
						className="search-bar"
						value={search}
						onChange={e => filterNotes(e)}
					/>
				</div>
				<div className="add-div btn" onClick={() => setOpen(true)}>
					<i className="fa-solid fa-plus"></i>
					<a className="add-btn">Note</a>
				</div>
			</main>
		</>
	);
}

export default Search;
