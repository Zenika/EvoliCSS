import React from 'react'
import { Link } from 'react-router-dom'

import './Sidebar.scss'

const Sidebar = () => (
  <nav className="ct-navbar">
    <h2 className="is-title is-2">EvoliCSS</h2>
    <div className="divider" />
    <div className="ct-navbar-main">
      <ul className="list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/overview">Overview</Link>
          <ul className="list">
            <li>
              <Link to="/overview/start">Start</Link>
            </li>
            <li>
              <Link to="/overview/modularity">Modularity</Link>
            </li>
            <li>
              <Link to="/overview/colors">Colors</Link>
            </li>
            <li>
              <Link to="/overview/mixins">Mixins</Link>
            </li>
            <li>
              <Link to="/overview/classes">Classes</Link>
            </li>
            <li>
              <Link to="/overview/responsiveness">Responsiveness</Link>
            </li>
            <li>
              <Link to="/overview/functions">Functions</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/modifiers">Modifiers</Link>
          <ul className="list">
            <li>
              <Link to="/modifiers/syntax">Syntax</Link>
            </li>
            <li>
              <Link to="/modifiers/responsive-helpers">Responsive helpers</Link>
            </li>
            <li>
              <Link to="/modifiers/typography-helpers">Typography helpers</Link>
            </li>
            <li>
              <Link to="/modifiers/helpers">Helpers</Link>
            </li>
            <li>
              <Link to="/modifiers/color-helpers">Color helpers</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/element">Element</Link>
          <ul className="list">
            <li>
              <Link to="/element/box">Box</Link>
            </li>
            <li>
              <Link to="/element/button">Button</Link>
            </li>
            <li>
              <Link to="/element/content">Content</Link>
            </li>
            <li>
              <Link to="/element/delete">Delete</Link>
            </li>
            <li>
              <Link to="/element/icon">Icon</Link>
            </li>
            <li>
              <Link to="/element/image">Image</Link>
            </li>
            <li>
              <Link to="/element/notification">Notification</Link>
            </li>
            <li>
              <Link to="/element/progress-bars">Progress bars</Link>
            </li>
            <li>
              <Link to="/element/table">Table</Link>
            </li>
            <li>
              <Link to="/element/tag">Tag</Link>
            </li>
            <li>
              <Link to="/element/title">Title</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/columns">Columns</Link>
          <ul className="list">
            <li>
              <Link to="/columns/basics">Basics</Link>
            </li>
            <li>
              <Link to="/columns/responsiveness">Responsiveness</Link>
            </li>
            <li>
              <Link to="/columns/gap">Gap</Link>
            </li>
            <li>
              <Link to="/columns/sizes">Sizes</Link>
            </li>
            <li>
              <Link to="/columns/nesting">Nesting</Link>
            </li>
            <li>
              <Link to="/columns/options">Options</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/forms">Forms</Link>
          <ul className="list">
            <li>
              <Link to="/forms/general">General</Link>
            </li>
            <li>
              <Link to="/forms/textarea">Textarea</Link>
            </li>
            <li>
              <Link to="/forms/checkbox">Checkbox</Link>
            </li>
            <li>
              <Link to="/forms/file">File</Link>
            </li>
            <li>
              <Link to="/forms/input">Input</Link>
            </li>
            <li>
              <Link to="/forms/select">Select</Link>
            </li>
            <li>
              <Link to="/forms/radio">Radio</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/components">Components</Link>
          <ul className="list">
            <li>
              <Link to="/components/colors">Colors</Link>
            </li>
            <li>
              <Link to="/components/buttons">Buttons</Link>
            </li>
            <li>
              <Link to="/components/titles">Titles</Link>
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
