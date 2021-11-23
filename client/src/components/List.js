import React from 'react'
import Heading from "./Heading"
import {Link} from 'react-router-dom'
import{ListGroup, ListGroupItem,Button} from 'reactstrap'
import UserList from "./UserList"


const List = () => {
	
	return (<>
		<Heading/>
		<UserList/>
		</>
	)
}
export default List;
