import React, {useState} from "react";
import swal from 'sweetalert';
import axios from 'axios';
import { Link,useNavigate} from "react-router-dom";

const Addtodos =()=>{    
    let Navigate= useNavigate();
    const[todo,settodo]=useState({ todotitle: '',  description: '',})
    

const handleChange = (e) =>{
    settodo({...todo,[e.target.name]: e.target.value});
};

 const handleSubmit = (e) => {
    e.preventDefault();
    const sendtodoData={
        todotitle:todo.todotitle,
        description:todo.description
    }      
    console.log(sendtodoData);    

    axios.post('http://localhost/backend/User/addtodos',sendtodoData)
        .then(response => {
            console.log(response)
            if (response.data.success == "1") {
                // swal('Success!', response.data.msg, 'success');
                Navigate('/dashboard');
            }
            else {
                swal('Error!', response.data.msg, 'error');
            }
        })
}
  return (
      <React.Fragment> 
          <hr/>
      <form className="form-horizontal" onSubmit={handleSubmit} method="">                   
                    <div className="container ">
                    <Link className="btn btn-primary" to="/dashboard">Dashboard</Link> 
                    <hr/>
                        <h1>Add A Todo</h1>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label ">Todo Title</label>
                                    <input type="text" className="form-control" name="todotitle" placeholder="Enter Todo Title" value={todo.todotitle} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label ">Description</label>
                                    <input type="text" className="form-control" name="description" placeholder="Enter Todo description " value={todo.description} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <br/>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="submit" className="btn btn-info" value="Submit" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
    </React.Fragment>
    );
  }
  
  export default Addtodos;
  