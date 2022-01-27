import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ContactList = () => {
	const api = "https://api-contact-radike.herokuapp.com/api/contacts";
	const [contactList, setContactList] = useState([]);

	useEffect(() => {
		const getContacts = async () => {
			const res = await axios.get(api);
			setContactList(res.data);
		};
		getContacts();
	}, [contactList]);

	const deleteContact = async (id) => {
		await axios.delete("http://localhost:8080/api/contacts/" + id);
	};

	return (
		<div className="row">
			{contactList.map((contact) => (
				<div className="col-md-4 p-2" key={contact._id}>
					<div className="card">
						<div className="card-header">
							<h5>
								{contact.name} {contact.surname}
							</h5>
						</div>
						<div className="card-body">
							<p>Direccion: {contact.address}</p>
							<p>Telefono: {contact.telephone}</p>
						</div>
						<div className="card-footer">
							<button
								className="btn btn-warning"
								onClick={() => deleteContact(contact._id)}
							>
								Eliminar
							</button>
							<Link className="btn btn-primary m-1" to={"/edit/" + contact._id}>
								Editar
							</Link>
							<Link
								className="btn btn-success m-1"
								to={"/details/" + contact._id}
							>
								ver detalles
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ContactList;
