import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
            <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 className="m-0 text-primary"><i className="fa fa-car me-3"></i>CarServ</h2>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <Link to="/index2" className="nav-item nav-link">Home</Link>
                    <Link to="/service" className="nav-item nav-link">Annonces</Link>
                    <Link to="/about" className="nav-item nav-link">About</Link>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu fade-up m-0">
                            <Link to="/booking" className="dropdown-item">Booking</Link>
                            <Link to="/team" className="dropdown-item">Technicians</Link>
                            <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                            <a href="/c404" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <Link to="/contact" className="nav-item nav-link">Contact</Link>
                </div>
                <a href="/login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Se connecter</a>
            </div>
        </nav>
    );
}

export default Navbar;
