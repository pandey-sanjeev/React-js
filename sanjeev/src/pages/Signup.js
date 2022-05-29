import React from "react";
import swal from 'sweetalert';
import axios from 'axios';
import { Link } from "react-router-dom";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
        name: '',
        fathername: '',
        dob: '',
        address: '',
        email: '',
        password: '',
    }
}
handleChange = e =>{
    this.setState({[e.target.name]: e.target.value});
};

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    let headers = new Headers();
    headers.append('Content-type','application/json');      
    headers.append('Access-Control-Allow-Origin','*');      

    axios.post('http://localhost/backend/User/insertdata',
        {
            name: this.state.name,
            fathername: this.state.fathername,
            dob: this.state.dob,
            address: this.state.address,
            email: this.state.email,
            password: this.state.password,
        },
        {headers}
    )
        .then(response => {
            console.log(response)
            if (response.data.success == "1") {
                swal('Success!', response.data.msg, 'success');
            }
            else {
                swal('Error!', response.data.msg, 'error');
            }
        })
        .catch(err => {
            swal('Error!', 'Something went wrong', 'error')
        })
}
render() {
  return (
      <React.Fragment> 
          <hr/> 
      <form className="form-horizontal" onSubmit={this.handleSubmit} method="">                   
                    <div className="container ">
                    <Link className="btn btn-danger" to="/">Home</Link>
                    <hr/>  
                        <h1>Please Signup</h1>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label ">Name</label>
                                    <input type="text" className="form-control" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label ">Father Name</label>
                                    <input type="text" className="form-control" name="fathername" placeholder="Enter Father Name" value={this.state.fathername} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>                       
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label ">Date Of Birth</label>
                                    <input type="date" className="form-control" name="dob" placeholder="Date Of Birth" value={this.state.dob} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label ">Address</label>
                                    <input type="text" className="form-control" name="address" placeholder="Enter Address" value={this.state.address} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label ">Email</label>
                                    <input type="email" className="form-control" name="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label className="control-label ">Password</label>
                                    <input type="password" className="form-control" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.handleChange} />
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
};
  
  export default Signup;
  