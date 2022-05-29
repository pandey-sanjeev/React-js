import React from 'react'
import { Link } from "react-router-dom";
import Todolist from './Todolist';

const dashboard = () => {
  return (
        <div> 
          <hr/> 
          <Link className="btn btn-success" to="/userprofile">User Profile</Link> 
          <Link className="btn btn-success" to="/addtodos">Add Todos</Link> 
          <Link className="btn btn-danger" to="/">Logout</Link> 
          <hr/> 
          <Todolist/>
       </div> 
        )
  }

export default dashboard;