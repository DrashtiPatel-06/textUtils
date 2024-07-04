import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const themeColors = [
    { name: "dark", code: "white" },
    { name: "blue", code: "darkBlue" },
    { name: "pink", code: "hotpink" },
    { name: "teal", code: "teal" },
    { name: "purple", code: "purple" },
    { name: "light", code: "#3b394d" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      style={{ boxShadow: "0 2px 4px", backgroundColor: "black" }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          to="/"
          style={{ color: props.mode === "light" ? "black" : "white" }}
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{ color: props.mode === "light" ? "black" : "white" }}
              >
                {props.aboutText}
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form> */}

          {themeColors.map((color, index) => (
            <div
              key={index}
              className="mx-1"
              onClick={() => props.toggleMode(color.name)}
              style={{
                backgroundColor: color.code,
                borderRadius: "100%",
                width: "30px",
                height: "30px",
                boxShadow: "0 2px 4px",
                cursor: "pointer",
              }}
            ></div>
          ))}
          {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
            </div> */}
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  title: "Set Title Here",
  aboutText: "About Text Here",
};
