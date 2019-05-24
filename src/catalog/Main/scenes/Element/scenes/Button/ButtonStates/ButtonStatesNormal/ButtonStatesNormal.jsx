import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesNormal = () => (
  <div>
    <h4>Normal</h4>
    <Sandbox>
      <a className="button">Normal</a>
      <a className="button is-primary">Normal</a>
      <a className="button is-link">Normal</a>
      <a className="button is-info">Normal</a>
      <a className="button is-success">Normal</a>
      <a className="button is-warning">Normal</a>
      <a className="button is-danger">Normal</a>
    </Sandbox>
  </div>
)

export default ButtonStatesNormal
