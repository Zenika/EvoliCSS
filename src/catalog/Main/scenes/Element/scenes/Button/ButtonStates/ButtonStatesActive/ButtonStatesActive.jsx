import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesActive = () => (
  <div>
    <h4>Active</h4>
    <Sandbox>
      <a className="button is-active">Active</a>
      <a className="button is-primary is-active">Active</a>
      <a className="button is-link is-active">Active</a>
      <a className="button is-info is-active">Active</a>
      <a className="button is-success is-active">Active</a>
      <a className="button is-warning is-active">Active</a>
      <a className="button is-danger is-active">Active</a>
    </Sandbox>
  </div>
)

export default ButtonStatesActive
