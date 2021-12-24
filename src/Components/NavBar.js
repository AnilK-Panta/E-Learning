import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="maxWidthHold navBar">
      <Link
        to="/"
        style={{
          textDecoration: "none",
        }}
      >
        <div className="logo">
          <h1>ELearn</h1>
          <span></span>
        </div>
      </Link>
      <div className="navContent">
        <p>About Us</p>
        <p>Programs</p>
        <p>Pricing</p>
        <Link
          to="/mentors"
          style={{
            textDecoration: "none",
          }}
        >
          <p>Mentors</p>
        </Link>

        <p>Blogs</p>
      </div>
      <div className="navWatch">
        <span>Youtube</span>
        <div className="watchIcon">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0455 9.78403L5.88712 13.9375C5.27962 14.2897 4.5 13.8633 4.5 13.1534V4.8464C4.5 4.13765 5.2785 3.71015 5.88712 4.0634L13.0455 8.2169C13.1837 8.29579 13.2986 8.40983 13.3785 8.54744C13.4584 8.68505 13.5004 8.84134 13.5004 9.00047C13.5004 9.15959 13.4584 9.31588 13.3785 9.45349C13.2986 9.59111 13.1837 9.70514 13.0455 9.78403V9.78403Z"
              fill="#FF0000"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
