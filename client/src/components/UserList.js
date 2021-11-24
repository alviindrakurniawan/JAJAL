import React, { useState,useEffect } from 'react'
import axios from 'axios'
import User from './User'
import {ListGroup,ListGroupItem,Button} from 'reactstrap'


export default function UserList() {
	const [data, setData] = useState([]);
	useEffect(async() => {
		axios.get("http://localhost:8080/mahasiswa")
		.then((result)=>{setData(result.data)}).catch(error=>(console.log(error.message)))
	
	})
	


	return (
		<ListGroup className="mt-2">
			{data.map(el => (
			<ListGroupItem key={el._id}>
				<div>
					{el.Nama}
				</div>
				<div>
					{el.NIM}	
				</div>
				<div className="ml-auto"> 
				<Button onClick={
					()=>{
						axios.delete("http://localhost:8080/mahasiswa/"+el._id)
						.then(res=>console.log(res.data))
					}

				}> delete</Button>
				</div>
			</ListGroupItem>
			))}
		</ListGroup>
	)
}
