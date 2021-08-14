import React from "react";

const Filter = ({ filterState }) => {
	const [listFilter, setListFilter] = filterState;

	const updateListFilter = (event) => {
		setListFilter(event.target.value);
	};

	return (
		<form>
			filter shown with <input value={listFilter} onChange={updateListFilter} />
		</form>
	);
};

export default Filter;
