import React from 'react';
import { NavLink } from "react-router-dom"

const navItems = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/ducks',
    title: 'Ducks'
  },
]

function NavBar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-lavendar">
      <div className="container-fluid">
        <span className="navbar-brand">My favourite things</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navItems.map(navItem => (
              <li className="nav-item" key={navItem.path}>
                <NavLink className={({ isActive }) => (`nav-link ${isActive ? 'active' : ''}`)} to={navItem.path}>{navItem.title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
