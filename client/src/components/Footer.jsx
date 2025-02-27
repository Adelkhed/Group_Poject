import React from 'react';

const Footer = () => (
  <footer className="bg-light py-5 mt-5">
    <div className="container text-center text-md-start">
      <div className="row">
        {/* Quick Links Section */}
        <div className="col-md-4 mb-4">
          <h5 className="text-uppercase">Quick Links</h5>
          <ul className="list-unstyled">
            <li><a href="#!" className="text-decoration-none text-dark">Category 1</a></li>
            <li><a href="#!" className="text-decoration-none text-dark">Category 2</a></li>
            <li><a href="#!" className="text-decoration-none text-dark">Category 3</a></li>
          </ul>
        </div>
        
        {/* Info Section */}
        <div className="col-md-4 mb-4">
          <h5 className="text-uppercase">Info</h5>
          <ul className="list-unstyled">
            <li><a href="#!" className="text-decoration-none text-dark">About Us</a></li>
            <li><a href="#!" className="text-decoration-none text-dark">Contact Us</a></li>
            <li><a href="#!" className="text-decoration-none text-dark">Shipping Policy</a></li>
          </ul>
        </div>

        {/* Mission Section */}
        <div className="col-md-4 mb-4">
          <h5 className="text-uppercase">Our Mission</h5>
          <p>To be the best e-commerce website.</p>
        </div>
      </div>
      
      {/* Subscribe Form */}
      <div className="text-center mt-4">
        <input
          type="email"
          placeholder="Subscribe to our emails"
          className="form-control w-50 mx-auto"
        />
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-4">
        <p className="text-muted">&copy; 2025 Floral Haven. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
