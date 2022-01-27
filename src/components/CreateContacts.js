import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateContacts = () => {
	const api = "https://api-contact-radike.herokuapp.com/api/contacts";
	const initialForm = {
		name: "",
		surname: "",
		age: "",
		address: "",
		telephone: "",
		email: "",
		diagnosis: "",
		financier: "",
	};

	let { id } = useParams();

	const [contact, setContact] = useState([initialForm]);
	const [dataToEdit, setDataToEdit] = useState(id);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		//console.log(contact);
		const newContact = {
			name: contact.name,
			surname: contact.surname,
			age: contact.age,
			telephone: contact.telephone,
			address: contact.address,
			email: contact.email,
			diagnosis: contact.diagnosis,
			financier: contact.financier,
		};
		await axios.post(api, newContact);

		setContact({ ...initialForm });
	};

	const updateContact = async (e) => {
		e.preventDefault();
		const updatedContact = {
			name: contact.name,
			surname: contact.surname,
			age: contact.age,
			telephone: contact.telephone,
			address: contact.address,
			email: contact.email,
			diagnosis: contact.diagnosis,
			financier: contact.financier,
		};
		console.log(updatedContact);
		await axios.put(api + "/" + dataToEdit, updatedContact);
		setContact({ ...initialForm });
		setDataToEdit("");
	};

	const getOne = async (valorId) => {
		const res = await axios.get(api + "/" + valorId);
		setContact({
			name: res.data.name,
			surname: res.data.surname,
			age: res.data.age,
			telephone: res.data.telephone,
			address: res.data.address,
			email: res.data.email,
			diagnosis: res.data.diagnosis,
			financier: res.data.financier,
		});
	};
	useEffect(() => {
		if (dataToEdit !== "") {
			getOne(dataToEdit);
		}
	}, [dataToEdit]);

	return (
		<div className="col-md-6 offset-md-3">
			<div className="card card-body">
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label> Nombre: </label>
						<input
							type="text "
							className="form-control"
							placeholder="ingresar el nombre"
							required
							name="name"
							value={contact.name}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label> Apellido: </label>
						<input
							type="text "
							className="form-control"
							placeholder=" ingresar el apellido"
							required
							name="surname"
							value={contact.surname}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label> Edad: </label>
						<input
							type="number "
							className="form-control"
							placeholder="ingresar la edad"
							required
							name="age"
							value={contact.age}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label> Telefono: </label>
						<input
							type="number "
							className="form-control"
							placeholder="ingresar un numero de contacto"
							required
							name="telephone"
							value={contact.telephone}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label> Dirección: </label>
						<input
							type="text "
							className="form-control"
							placeholder="dirección"
							required
							name="address"
							value={contact.address}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label> email: </label>
						<input
							type="text "
							className="form-control"
							placeholder="ingrese una direccion de correo electronico"
							required
							name="email"
							value={contact.email}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label> Diagnostico: </label>
						<input
							type="text "
							className="form-control"
							placeholder="Diagnostico"
							required
							name="diagnosis"
							value={contact.diagnosis}
							onChange={handleChange}
						/>
					</div>
					<div className="mb-3">
						<label> Obra social: </label>
						<input
							type="text "
							className="form-control"
							placeholder="ingrese la obra social o  particular"
							required
							name="financier"
							value={contact.financier}
							onChange={handleChange}
						/>
					</div>

					<button className="btn btn-danger form-control">Guardar</button>
				</form>
				<form onSubmit={updateContact}>
					<button className="btn btn-primary form-control mt-2">
						Actualizar
					</button>
				</form>
			</div>
		</div>
	);
};

export default CreateContacts;
