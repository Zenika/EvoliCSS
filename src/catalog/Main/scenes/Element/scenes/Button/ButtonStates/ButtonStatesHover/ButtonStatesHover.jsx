import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesHover = () => (
  <div>
    <h4>Hover</h4>
    <Sandbox>
      <button className="button is-hovered">Hover</button>
      <button className="button is-primary is-hovered">Hover</button>
      <button className="button is-link is-hovered">Hover</button>
      <button className="button is-info is-hovered">Hover</button>
      <button className="button is-success is-hovered">Hover</button>
      <button className="button is-warning is-hovered">Hover</button>
      <button className="button is-danger is-hovered">Hover</button>
    </Sandbox>
  </div>
)

export default ButtonStatesHover
