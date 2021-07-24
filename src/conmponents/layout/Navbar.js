import React from "react";
import {Link as NavLink} from "react-router-dom";

const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
            <NavLink className="navbar-brand" href="/">Users</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">

                <li class="nav-item active">
                    <NavLink className=" nav-link" exact to="/">Home </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className=" nav-link" exact to="/about">About</NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className=" nav-link" exact to="/contact">Contact</NavLink>
                </li>

                </ul>
             
            </div>

            <NavLink className="btn btn-outline-light" to="/users/add">Add User</NavLink>
            </div>
  
        </nav>

    );
};

export default Navbar;

