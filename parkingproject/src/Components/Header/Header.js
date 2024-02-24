import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <Link className="link_btn" to="/">Parkeaze</Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="link_btn" to="/">Home</Link>
              </li>
              <li class="nav-item">
              <Link className="link_btn" to="/about">About</Link>
              </li>
              <li class="nav-item">
              <Link className="link_btn" to="/contact">Contact Us</Link>
              </li>
                      
            </ul>
        </div>
        </div>
      </nav>

      
    </div>
  )
}

export default Header
