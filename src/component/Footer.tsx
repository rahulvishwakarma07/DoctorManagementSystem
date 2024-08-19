import React from 'react';
import logo from '../images/image 16.png'
import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer: React.FC = () => {
  return (
    <>
      <footer style={{ backgroundColor: "#0bcc96" }} className="mt-5 text-white ">
        <div className="container p-5">
          <div className="row">
            <div className="col-md-4 mb-3">
              <div className='d-flex'>
                <img src={logo} alt="Healthcare Logo" className="mb-2" />
                <h3 className='text-white mt-2 ms-2 fw-bold'>Health<span style={{ color: "#007e85" }}>Care</span> Hub</h3>
              </div>
              <p className="mb-0 ms-3">&copy; 2022 BRIX Templates<br />All Rights Reserved</p>
            </div>
            <div className="footer-col col-md-2 mb-3">
              <h5 className='fw-bold'>Product</h5>
              <ul className="list-unstyled mt-4">
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Features</a></li>
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Pricing</a></li>
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Case studies</a></li>
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Reviews</a></li>
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Updates</a></li>
              </ul>
            </div>
            <div className="footer-col col-md-2 mb-3">
              <h5 className='fw-bold'>Company</h5>
              <ul className="list-unstyled mt-4">
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">About</a></li>
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Contact us</a></li>
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Careers</a></li>
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Culture</a></li>
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Blog</a></li>
              </ul>
            </div>
            <div className="footer-col col-md-2 mb-3">
              <h5 className='fw-bold'>Support</h5>
              <ul className="list-unstyled mt-4">
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Getting started</a></li>
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Help center</a></li>
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Server status</a></li>
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Report a bug</a></li>
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white">Chat support</a></li>
              </ul>
            </div>
            <div className="footer-col col-md-2 mb-3">
              <h5 className='fw-bold'>Follow us</h5>
              <ul className="list-unstyled mt-4">
                <li className="me-3"><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white"><i className="me-3 bi bi-facebook"></i> Facebook</a></li>
                <li className="me-3"><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white"><i className="me-3 bi bi-twitter"></i> Twitter</a></li>
                <li className="me-3"><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white"><i className="me-3 bi bi-instagram"></i> Instagram</a></li>
                <li className="me-3"><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white"><i className="me-3 bi bi-linkedin"></i> LinkedIn</a></li>
                <li><a href="#" style={{ textDecoration: "none", fontSize: "18px" }} className="text-white"><i className=" me-3 bi bi-youtube"></i> YouTube</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
