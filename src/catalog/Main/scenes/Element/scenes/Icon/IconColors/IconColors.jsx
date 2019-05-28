import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const Icon = () => (
  <div>
    <h3>Colors</h3>
    <Sandbox>
      <span className="icon has-text-info">
        <i className="fas fa-info-circle" />
      </span>
      <span className="icon has-text-success">
        <i className="fas fa-check-square" />
      </span>
      <span className="icon has-text-warning">
        <i className="fas fa-exclamation-triangle" />
      </span>
      <span className="icon has-text-danger">
        <i className="fas fa-ban" />
      </span>
    </Sandbox>
  </div>
)

export default Icon
