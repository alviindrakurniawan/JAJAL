import React from 'react';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import AddMahasiswa from "./components/AddMahasiswa";
import EditMahasiswa from "./components/EditMahasiswa";
import List from "./components/List";

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
	return (
	<div style={{maxWidth:"30rem",margin:"4rem auto"}}>
		<Router>

		<Routes>
			<Route exact path="/" element={<List/>}/>
			<Route path="/add" element={<AddMahasiswa/>}/>
			<Route path="/edit/:id" component={<EditMahasiswa/>}/>
		</Routes>
		</Router>
	</div>
	);
}

export default App;
