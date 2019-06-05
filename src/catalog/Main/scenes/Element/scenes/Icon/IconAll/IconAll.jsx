import React from 'react'
import './iconAll.css'

import iconRegular from './IconRegular'
import iconSolid from './IconSolid'
import iconBrand from './IconBrand.js'

const IconAll = () => (
  <div>
    <h3>All</h3>
    <div className="container">
      <h4>Regular</h4>
      {iconRegular.map(icon => (
        <div key={icon} className="item">
          {<i className={'far fa-' + icon} id={icon} />}
          <p>{icon}</p>
        </div>
      ))}
      <h4>Solid</h4>
      {iconSolid.map(icon => (
        <div key={icon} className="item">
          {<i className={'fas fa-' + icon} id={icon} />}
          <p>{icon}</p>
        </div>
      ))}
      <h4>Brand</h4>
      {iconBrand.map(icon => (
        <div key={icon} className="item">
          {<i className={'fab fa-' + icon} id={icon} />}
          <p>{icon}</p>
        </div>
      ))}
    </div>
  </div>
)

export default IconAll
