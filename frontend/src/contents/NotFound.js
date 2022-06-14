import React from 'react'
import {NavLink} from 'react-router-dom'

class NotFound extends React.Component{
	
	render() {
		return (
		 <div>
		   <h5>Error 404</h5>
		   <NavLink to='/'>go back homepage</NavLink>
		 </div>
		)
	}
	
}

export default NotFound;