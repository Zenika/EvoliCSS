import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonDisplays = () => (
  <div>
    <h3>Displays</h3>
    <Sandbox>
      <button className="button is-outlined">Outlined</button>
      <button className="button is-primary is-outlined">Outlined</button>
      <button className="button is-link is-outlined">Outlined</button>
      <button className="button is-info is-outlined">Outlined</button>
      <button className="button is-success is-outlined">Outlined</button>
      <button className="button is-danger is-outlined">Outlined</button>
    </Sandbox>
  </div>
)

export default ButtonDisplays
