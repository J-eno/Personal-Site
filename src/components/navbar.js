import React from "react"
import { Link } from "gatsby"
import "./base.scss"

export default function Navbar() {
  return (
    <nav className="navbar is-fixed-top is-primary">
      <div className="container">
        <div className="navbar-brand">
            <Link to="/" className="navbar-item">
                Joel
            </Link>
        </div>
        <div className="navbar-menu">
            <div className="navbar-end">
            <Link to="/" className="navbar-item">
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
