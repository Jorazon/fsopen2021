import axios from "axios";

const baseURL = "/api/persons";

const getAllPersons = () => {
	return axios.get(baseURL);
};

const addPerson = (newPerson) => {
	return axios.post(baseURL, newPerson);
};

const editPerson = (existing, newNumber) => {
	return axios.put(`${baseURL}/${existing.id}`, {
		...existing,
		number: newNumber,
	});
};

const deletePerson = (id) => {
	return axios.delete(`${baseURL}/${id}`);
};

const personService = {
	getAll: getAllPersons,
	create: addPerson,
	update: editPerson,
	delete: deletePerson,
};

export default personService;
