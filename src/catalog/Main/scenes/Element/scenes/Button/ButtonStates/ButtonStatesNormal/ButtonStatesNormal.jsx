import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesNormal = () => (
  <div>
    <h4>Normal</h4>
    <Sandbox>
      <button className="button">Normal</button>
      <button className="button is-primary">Normal</button>
      <button className="button is-link">Normal</button>
      <button className="button is-info">Normal</button>
      <button className="button is-success">Normal</button>
      <button className="button is-warning">Normal</button>
      <button className="button is-danger">Normal</button>
    </Sandbox>
  </div>
)

export default ButtonStatesNormal
