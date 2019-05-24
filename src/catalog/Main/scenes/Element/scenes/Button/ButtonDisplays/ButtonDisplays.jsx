import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonDisplays = () => (
  <div>
    <h3>Displays</h3>
    <Sandbox>
      <a className="button is-outlined">Outlined</a>
      <a className="button is-primary is-outlined">Outlined</a>
      <a className="button is-link is-outlined">Outlined</a>
      <a className="button is-info is-outlined">Outlined</a>
      <a className="button is-success is-outlined">Outlined</a>
      <a className="button is-danger is-outlined">Outlined</a>
    </Sandbox>
  </div>
)

export default ButtonDisplays
