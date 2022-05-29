import React, { useState } from "react";
import swal from 'sweetalert';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Login =()=>{    
    let Navigate= useNavigate();
    const[user,setUser]=useState({ email: '',  password: '',})
    

const handleChange = (e) =>{
    setUser({...user,[e.target.name]: e.target.value});
};

 const handleSubmit = (e) => {
    e.preventDefault();
    const sendData={
        email:user.email,
        password:user.password
    }      
    console.log(sendData);
    axios.post('http://localhost/backend/User/checkuser',sendData)
        .then(response => {
            if (JSON.stringify(response.data)) {
                console.log(response.data);
                Navigate('/dashboard');
                // alert("user")
            }
            if (response.data.success == "0") {
                swal('Error!', response.data.msg, 'error');
                Navigate('/login');

            }       
        })
}
  return (
      <React.Fragment> 
          <hr/>
      <form className="form-horizontal" onSubmit={handleSubmit} method="">                   
                    <div className="container ">
                    <Link className="btn btn-primary" to="/Signup">Signup</Link> 
                    <hr/> 
                        <h1>Please Login</h1>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label ">Email</label>
                                    <input type="email" className="form-control" name="email" placeholder="Enter email" value={user.email} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label ">Password</label>
                                    <input type="password" className="form-control" name="password" placeholder="Enter password" value={user.password} onChange={handleChange} />
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
  
  export default Login;
  