import React from "react";
import { NavLink } from "react-router-dom";
import { prependOnceListener } from "cluster";

const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
        <div className="nav-link-wrapper">
            <NavLink to="blog" activeClassName="nav-link-active">
                Blog
            </NavLink>
        </div>
        );
    }; 

    return (
            <div className="nav-wrapper">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <NavLink exact to="/" activeClassName="nav-link-active">
                            Home
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="about-me" activeClassName="nav-link-active">
                            About
                        </NavLink>
                    </div>
                    <div className="nav-link-wrapper">
                        <NavLink to="contact" activeClassName="nav-link-active">
                            Contact
                        </NavLink>
                    </div>

                    {true ? "do this" : "do something else"}

                    {props.loggedInStatus === "LOGED_IN" ? ( 
                        dynamicLink("/blog", "Blog") 
                    ): null}
                </div>
                
                <div className="right-side">Nina Balan</div>
            </div>
        );
    }
export default NavigationComponent;