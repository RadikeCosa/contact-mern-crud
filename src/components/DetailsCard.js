import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function DetailsCard() {
	const [contact, setContact] = useState([]);
	const { id } = useParams();
	const api = "https://api-contact-radike.herokuapp.com/api/contacts";

	useEffect(() => {
		const getContact = async () => {
			const res = await axios.get(api + "/" + id);
			setContact(res.data);
		};
		getContact();
	}, [contact]);

	return (
		<div class="row">
			<div className="col-md-6 p-2">
				<div class="card">
					<div class="card-header">
						<h3 className="text-center">
							{contact.name} {contact.surname} ({contact.age})
						</h3>
					</div>
					<div class="card-body">
						<p>
							<bold>Diagnostico:</bold> {contact.diagnosis}
						</p>
						<p>Obra Social: {contact.financier}</p>
					</div>
					<div class="card-footer">
						<p>Correo Electronico:{contact.email}</p>
						<p>Direccion: {contact.address}</p>
						<p>Telefono de contacto: {contact.telephone}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DetailsCard;
