import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesActive = () => (
  <div>
    <h4>Active</h4>
    <Sandbox>
      <button className="button is-active">Active</button>
      <button className="button is-primary is-active">Active</button>
      <button className="button is-link is-active">Active</button>
      <button className="button is-info is-active">Active</button>
      <button className="button is-success is-active">Active</button>
      <button className="button is-warning is-active">Active</button>
      <button className="button is-danger is-active">Active</button>
    </Sandbox>
  </div>
)

export default ButtonStatesActive
