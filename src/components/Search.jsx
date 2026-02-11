function Search({ setOpen }) {
	return (
		<>
			<main className="main">
				<div className="search-container">
					<i className="fa-solid fa-search search-icon"></i>
					<input
						type="search"
						placeholder="Search Your Note..."
						className="search-bar"
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
