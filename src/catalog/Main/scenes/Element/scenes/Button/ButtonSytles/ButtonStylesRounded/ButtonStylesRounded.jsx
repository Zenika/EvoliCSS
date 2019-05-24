import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStylesRounded = () => (
  <div>
    <h4>Rounded</h4>
    <Sandbox>
      <a className="button is-rounded">Rounded</a>
      <a className="button is-primary is-rounded">Rounded</a>
      <a className="button is-link is-rounded">Rounded</a>
      <a className="button is-info is-rounded">Rounded</a>
      <a className="button is-success is-rounded">Rounded</a>
      <a className="button is-danger is-rounded">Rounded</a>
    </Sandbox>
  </div>
)

export default ButtonStylesRounded
