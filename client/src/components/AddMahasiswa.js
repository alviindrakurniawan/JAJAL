import axios from 'axios'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import{
	Form,FormGroup,Label,Input,Button
}from 'reactstrap'


const AddMahasiswa = ()=>{
	const [name,setName]= useState()
	const [nim,setNim]= useState()
	const [prodi,setProdi]= useState()
	const [angkatan,setAngkatan]= useState()
	const [status,setStatus]= useState()

	return (
		<Form>
			<FormGroup>
			<Label>Name</Label>
			<Input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter Name"> </Input>
			<Label>NIM</Label>
			<Input onChange={(e)=>setNim(e.target.value)} type="text" placeholder="Enter Name"> </Input>
			<Label>Prodi</Label>
			<Input onChange={(e)=>setProdi(e.target.value)} type="text" placeholder="Enter Name"> </Input>
			<Label>Angkatan</Label>
			<Input onChange={(e)=>setAngkatan(e.target.value)} type="text" placeholder="Enter Name"> </Input>
			<Label>Status</Label>
			<Input onChange={(e)=>setStatus(e.target.value)} type="text" placeholder="Enter Name"> </Input>
			</FormGroup>
		
		<Link to="/" className="btn btn-danger ml-2" >Cancel</Link>
		<Button onClick={()=>{
			axios.post("http://localhost:8080/mahasiswa/",{
				Nama:name,
				NIM :nim,
				Prodi:prodi,
				Angkatan:angkatan,
				Status:status,
			})
			.then((res) => {
				console.log(res.data.message);
			    })

		}}  type="submit">Submit</Button>
		</Form>
	)
}
export default AddMahasiswa;
