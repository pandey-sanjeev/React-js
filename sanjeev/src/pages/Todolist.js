import React,{useState, useEffect} from 'react'
import axios from "axios";
import swal from 'sweetalert';

function Todolist() {
  const [data, getData]= useState([])

  useEffect(()=> {
    fetchData()
  },[])

  function fetchData()
  {
    fetch('http://localhost/backend/User/todolist')
    .then((res)=>
      res.json())

    .then((response) => {
      // console.log(response)
      getData(response);
    })
  }
  function deleteTodo(todoid){
    axios.post('http://localhost/backend/User/deletetodo', {
      todoid: todoid
  })
      .then(response => {
        console.log(response);
        fetchData()
      })
      .catch(err => {
          swal('Error!', 'Something went wrong', 'error')
      })
  }
  return (
    <div className="container">
    <div className="py-4">
      <h3 className="mb-3 text-center">Todo List</h3>
      <table className="table border shadow">
        <thead className="thead-primary">
          <tr>
            <th scope="col">Serial No</th>
            <th scope="col">Todo Title</th>
            <th scope="col">Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {data.map((item, i) => (
            <tr key={i}>
              <td>{i+1}</td>
              <td>{item.todotitle}</td>
              <td>{item.description}</td>
              <td><button className="btn btn-danger" onClick={()=>deleteTodo(item.todoid)}>Delete</button></td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  </div>  )
}

export default Todolist