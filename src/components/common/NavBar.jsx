import React, { useState } from "react";
import {Link} from 'react-router-dom';
function NavBar() {
  const [NavBar, setNavBar] = useState(false);

  const toggleOffcanvas = () => {
    setNavBar(!NavBar);
  };


    return (
        <>
        
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    Metropolitan Museum of Art
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to="/About" className="nav-link active"><span data-bs-toggle="offcanvas">About Us</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to="/search" className="nav-link active"><span data-bs-toggle="offcanvas">New Search</span></Link>                            
                            </li>
                        </ul>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to="/About" className="nav-link active"><span data-bs-toggle="offcanvas">Your Favorites</span></Link> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        </>
        
    )
}
export default NavBar;