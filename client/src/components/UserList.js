import React, { useState,useEffect } from 'react'
import axios from 'axios'
import User from './User'

export default function UserList() {
	const [data, setData] = useState([]);
	useEffect(async() => {
		const hasil=await
		axios.get("http://localhost:8080/mahasiswa")
		.then((result)=>{setData(result.data)}).catch(error=>(console.log(error.message)))
	
		console.log(hasil)
	})

	return (
		<div>
			
			{data.map(el => {
			<User
			nama={el.nama}
			nim={el.nim}
			
			/> })}
		</div>
	)
}
