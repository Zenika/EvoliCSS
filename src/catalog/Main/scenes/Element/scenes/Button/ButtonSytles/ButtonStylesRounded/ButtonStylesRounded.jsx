import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStylesRounded = () => (
  <div>
    <h4>Rounded</h4>
    <Sandbox>
      <button className="button is-rounded">Rounded</button>
      <button className="button is-primary is-rounded">Rounded</button>
      <button className="button is-link is-rounded">Rounded</button>
      <button className="button is-info is-rounded">Rounded</button>
      <button className="button is-success is-rounded">Rounded</button>
      <button className="button is-danger is-rounded">Rounded</button>
    </Sandbox>
  </div>
)

export default ButtonStylesRounded
