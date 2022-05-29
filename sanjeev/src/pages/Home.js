import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <React.Fragment>  
        <hr/>
        <div className="text-center ">
        <h1>Please Login</h1>
        <a>If you have account</a><p/>
        <Link className='btn btn-primary' to="/Login">Login</Link>

        <hr/>
        </div>
        <div className="text-center ">
        <h1>Please Signup</h1>
        <a>Don't have account</a><p/>
        <Link className="btn btn-primary" to="/Signup">Signup</Link>

        </div>
        <hr/>
      </React.Fragment>
    );
  };
  
  export default Home;