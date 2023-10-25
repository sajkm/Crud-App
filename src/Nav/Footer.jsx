import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div
      style={{ width: "100%", height: "250px", color:'white',overflow:'hidden' }}
      className="d-flex flex-column bg-info justify-content-center align-items-center mt-5"
    >
      <div className="footer-content flex-wrap d-flex justify-content-evenly w-100">
        <div className="website " style={{width:'25rem',color:'white'}}>
          <h2>
            {" "}
            <Link
              to={"/"}
              className="fs-4"
              style={{ textDecoration: "none", color: "white" }}
            >
              <i className="fa-solid fa-cloud-arrow-up"></i>
              {""}Contact Manager
            </Link>
          </h2>
          <p>
            Designed and built with all the love in the world by Saj 
             with the help of our contributors.
          </p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p className="text-muted">Currently v5.3.2.</p>
       </div>
        <div className="links d-flex flex-column">
          <h4>Links</h4>
          <Link
            to={"/viewcontact/:contactId"}
            className=""
            style={{ textDecoration: "none", color: "white" }}
          >
            View Contact
          </Link>
          <Link
            to={"/addcontact"}
            className=""
            style={{ textDecoration: "none", color: "white" }}
          >
            Add Contact
          </Link>
          <Link
            to={"/contactlist"}
            className=""
            style={{ textDecoration: "none", color: "white" }}
          >
            Contact List
          </Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4>Guides</h4>
          <Link target="blank"
            to={"https://react.dev/"}
            className=""
            style={{ textDecoration: "none", color: "white" }}
          >
            React
          </Link>
          <Link
            to={"https://react-bootstrap.netlify.app/"}
            className="" target="blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            React bootstrap
          </Link>
          <Link
            to={"https://reactrouter.com/en/main"}
            className="" target="blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Routing
          </Link>
        </div>
        <div className="contact-us d-flex flex-column row-gap-2">
          <h4>Contact Us</h4>
          <div className="d-flex">
            <input
              type="text"
              className="form-control me-3"
              placeholder="Enter your Mail "
              name=""
              id=""
            />{" "}
            <button className="btn btn-warning" style={{width:'50px'}}><i class="fa-solid fa-circle-arrow-right"></i></button>
          </div>
          <div className="d-flex justify-content-evenly mt-3">
            <Link
              to={"/"}
              className=""
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-brands fa-linkedin fa-2xl"></i>
            </Link>
            <Link
              to={"/"}
              className=""
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-brands fa-facebook fa-2xl"></i>
            </Link>
            <Link
              to={"/"}
              className=""
              style={{ textDecoration: "none", color: "white" }}
            >
              <i class="fa-brands fa-github fa-2xl"></i>
            </Link>
            <Link
              to={"/"}
              className=""
              style={{ textDecoration: "none", color: "white" }}
            > 
              <i class="fa-brands fa-instagram fa-2xl"></i>
            </Link>
          </div>
        </div>
      </div>
      <p>Copyright © 2023 Contact Manager. Built with React.</p>
    </div>
  );
}
