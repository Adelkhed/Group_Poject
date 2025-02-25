import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Adel</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link" to="/category1">Category 1</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/category2">Category 2</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/category3">Category 3</Link></li>
        </ul>
        <div className="d-flex gap-3">
          <i className="bi bi-search"></i>
          <i className="bi bi-person"></i>
          <i className="bi bi-cart"></i>
        </div>
      </div>
    </div>
  </nav>
);
export default Navbar;