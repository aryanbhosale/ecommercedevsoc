import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GoogleLogout } from 'react-google-login';

const Navbar = (props) => {

    const clientId = "330445538784-ifust3ec1ig5ibhfp69537p8igvmvmeb.apps.googleusercontent.com";

    const logout = () => {
        console.log("Logout Successful!");
        props.response();
    }

    // To get a state of addItems, use name of the file not the function
    const state = useSelector((state) => state.addItem);


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">DUST</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">PRODUCTS</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">CONTACT</NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2 me-5">
                                <i className='fa fa-shopping-cart me-1'></i>
                                {state.length}
                            </NavLink>
                        </div>
                        <h4 className='lead me-2 ms-2' style={{ fontSize:17 }}>{props.stateAuth.profileObj.name}</h4>
                        <img src={props.stateAuth.profileObj.imageUrl} alt="Profile" className='rounded-circle sm ms-2' style={{ height:40, width:40}} />
                        <GoogleLogout
                            clientId={clientId}
                            render={(renderProps) => (
                                <button
                                  type="button"
                                  className="btn btn-outline-dark ms-5"
                                  onClick={renderProps.onClick}
                                  disabled={renderProps.disabled}
                                >
                                  <i className='fa fa-sign-out me-1'></i> LOGOUT
                                </button>
                              )}
                            onLogoutSuccess={logout}
                        >
                        </GoogleLogout>                           
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;