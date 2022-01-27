import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import ContactList from "./components/ContactList";
import CreateContacts from "./components/CreateContacts";
import DetailsCard from "./components/DetailsCard";

function App() {
	return (
		<div className="">
			<Nav />
			<div className="container p-4">
				<Routes>
					<Route path="/" element={<ContactList />} />
					<Route path="/CreateContact" element={<CreateContacts />} />
					<Route path="/edit/:id" element={<CreateContacts />} />
					<Route path="/details/:id" element={<DetailsCard />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
