import React from "react"
import { Link } from "gatsby"
import "./base.scss"

export default function Navbar() {
  return (
    <nav className="navbar is-fixed-top is-primary">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            &lt;Joel/&gt;
          </Link>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" onClick={
            () => {
              let burger = document.querySelector(".navbar-burger");
              burger.classList.add("is-active");
            }
          }>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu">
          <div className="navbar-end">
            <Link to="/about/" className="navbar-item">
              About
            </Link>
            <Link to="/" className="navbar-item">
              Resume
            </Link>
            <Link to="/" className="navbar-item">
              Projects
            </Link>
            <Link to="/" className="navbar-item">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
