import React from 'react'

export default function User(props) {
	
	const [nama, nim] = props

	return (
		<div>
			<div>
			{nama}
			</div>
			<div>
			{nim}	
			</div>
		</div>
	)
}
