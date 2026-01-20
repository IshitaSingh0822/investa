import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(245,245,245)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">

          <div className="col">
            <img
              src="media/images/logo.png"
              style={{ width: "50%" }}
              alt="Investa logo"
            />
            <p>
              &copy; 2010 - 2025, Investa Broking Ltd.
              <br />
              All rights reserved.
            </p>
          </div>

          <div className="col">
            <p>Company</p>
            <Link to="/about" className="d-block text-muted mb-2 text-decoration-none">About</Link>
            <Link to="/product" className="d-block text-muted mb-2 text-decoration-none">Products</Link>
            <Link to="/pricing" className="d-block text-muted mb-2 text-decoration-none">Pricing</Link>
            <Link to="/careers" className="d-block text-muted mb-2 text-decoration-none">Careers</Link>
            <Link to="/press" className="d-block text-muted mb-2 text-decoration-none">Press & media</Link>
          </div>

          <div className="col">
            <p>Support</p>
            <Link to="/contact" className="d-block text-muted mb-2 text-decoration-none">Contact</Link>
            <Link to="/support" className="d-block text-muted mb-2 text-decoration-none">Support portal</Link>
            <Link to="/charges" className="d-block text-muted mb-2 text-decoration-none">List of charges</Link>
            <Link to="/downloads" className="d-block text-muted mb-2 text-decoration-none">Downloads & resources</Link>
          </div>

          <div className="col">
            <p>Account</p>
            <Link to="/signup" className="d-block text-muted mb-2 text-decoration-none">Open an account</Link>
            <Link to="/fund-transfer" className="d-block text-muted mb-2 text-decoration-none">Fund transfer</Link>
          </div>
        </div>

        <div
          className="mt-4 pt-3 pb-4 d-flex flex-wrap justify-content-center gap-3 text-muted"
          style={{ fontSize: "13px" }}
        >
          <button className="btn btn-link text-muted p-0">NSE</button>
          <button className="btn btn-link text-muted p-0">BSE</button>
          <button className="btn btn-link text-muted p-0">MCX</button>
          <Link to="/terms" className="text-decoration-none text-muted">Terms & Conditions</Link>
          <Link to="/privacy" className="text-decoration-none text-muted">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
