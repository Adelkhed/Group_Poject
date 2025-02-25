import React from 'react';

const Footer = () => (
  <footer className="bg-light py-5 mt-5">
    <div className="container text-center text-md-start">
      <div className="row">
        <div className="col-md-4 mb-4">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>Category 1</li>
            <li>Category 2</li>
            <li>Category 3</li>
          </ul>
        </div>
        <div className="col-md-4 mb-4">
          <h5>Info</h5>
          <ul className="list-unstyled">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Shipping Policy</li>
          </ul>
        </div>
        <div className="col-md-4 mb-4">
          <h5>Our Mission</h5>
          <p>To be the best e-commerce website.</p>
        </div>
      </div>
      <div className="text-center mt-4">
        <input type="email" placeholder="Subscribe to our emails" className="form-control w-50 mx-auto" />
      </div>
    </div>
  </footer>
);

export default Footer;