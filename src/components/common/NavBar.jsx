import React, { useState } from "react";
import {Link} from 'react-router-dom';
function NavBar() {
  const [NavBar, setNavBar] = useState(false);

  const toggleOffcanvas = () => {
    setNavBar(!NavBar);
  };


    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://localhost:5173/">Metropolitan Museum of Art</a>
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
                                <a className="nav-link active" aria-current="page" href="http://localhost:5173/About">About Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="http://localhost:5173/">New Search</a>
                            </li>
                        </ul>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="http://localhost:5173/Favorites">Favorites</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar;