"use strict";
import React from "react";
import {NavLink} from "react-router-dom";

let Header = (props) => {
    //read user from props his name and then create two set of links
    return(
        <div className="col-md-12">
            <NavLink to="/home" className="button" activeClassName="success" >Home </NavLink> 
            <NavLink to="/user" className="button" activeClassName="success" >User </NavLink> 
            <NavLink to="/about" className="button" activeClassName="success">About  </NavLink>
         </div>
    )
}

export default Header;