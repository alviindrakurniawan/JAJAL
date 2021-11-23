import React from 'react'
import {Link} from 'react-router-dom'
import{
	Form,FormGroup,Label,Input,Button
}from 'reactstrap'


const AddMahasiswa = ()=>{
	return (
		<Form>
			<FormGroup>
			<Label>Name</Label>
			<Input type="text" placeholder="Enter Name"> </Input>
			<Label>NIM</Label>
			<Input type="text" placeholder="Enter Name"> </Input>
			<Label>Prodi</Label>
			<Input type="text" placeholder="Enter Name"> </Input>
			<Label>Angkatan</Label>
			<Input type="text" placeholder="Enter Name"> </Input>
			<Label>Status</Label>
			<Input type="text" placeholder="Enter Name"> </Input>
			</FormGroup>
		
		<Link to="/" className="btn btn-danger ml-2" >Cancel</Link>
		<Button type="submit">Submit</Button>
		</Form>
	)
}
export default AddMahasiswa;