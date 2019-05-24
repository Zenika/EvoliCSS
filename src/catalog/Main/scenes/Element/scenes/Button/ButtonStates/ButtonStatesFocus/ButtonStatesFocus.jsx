import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesFocus = () => (
  <div>
    <h4>Focus</h4>
    <Sandbox>
      <a className="button is-focused">Focus</a>
      <a className="button is-primary is-focused">Focus</a>
      <a className="button is-link is-focused">Focus</a>
      <a className="button is-info is-focused">Focus</a>
      <a className="button is-success is-focused">Focus</a>
      <a className="button is-warning is-focused">Focus</a>
      <a className="button is-danger is-focused">Focus</a>
    </Sandbox>
  </div>
)

export default ButtonStatesFocus
