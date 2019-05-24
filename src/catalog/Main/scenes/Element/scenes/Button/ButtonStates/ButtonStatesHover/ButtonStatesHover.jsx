import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesHover = () => (
  <div>
    <h4>Hover</h4>
    <Sandbox>
      <a className="button is-hovered">Hover</a>
      <a className="button is-primary is-hovered">Hover</a>
      <a className="button is-link is-hovered">Hover</a>
      <a className="button is-info is-hovered">Hover</a>
      <a className="button is-success is-hovered">Hover</a>
      <a className="button is-warning is-hovered">Hover</a>
      <a className="button is-danger is-hovered">Hover</a>
    </Sandbox>
  </div>
)

export default ButtonStatesHover
