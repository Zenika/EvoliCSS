import React from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.scss'

const Sidebar = () => (
  <nav className="ct-navbar">
    <div className="ct-navbar-main">
      <h2 className="is-title is-2">EvoliCSS</h2>
      <div className="divider" />
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/getting-started">Getting Started</Link>
        </li>
        <li>
          <Link to="/components">Components</Link>
          <ul className="list">
            <li>
              <Link to="/components/buttons">Buttons</Link>
            </li>
            <li>
              <Link to="/components/titles">Titles</Link>
            </li>
            <li>
              <Link to="/components/colors">Colors</Link>
            </li>
            <li>
              <Link to="/components/lists">Lists</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="ct-navbar-footer">
      <p>Developed with &lt;3 by the DreamLab</p>
      <a href="https://github.com/Zenika/EvoliCSS" target="_blank" rel="noopener noreferrer">
        Github
      </a>
    </div>
  </nav>
)

export default Sidebar
