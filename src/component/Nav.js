import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
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
                    <Link to="/annonce" className="nav-item nav-link">Annonces</Link>
                    <Link to="/favoris" className="nav-item nav-link">Favoris</Link>
                    <Link to="/historique" className="nav-item nav-link">Historique</Link>
                    <Link to="/chats" className="nav-item nav-link">Messages</Link>
                </div>
                <a href="/login" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Deconnexion</a>
            </div>
        </nav>
    );
}

export default Nav;
