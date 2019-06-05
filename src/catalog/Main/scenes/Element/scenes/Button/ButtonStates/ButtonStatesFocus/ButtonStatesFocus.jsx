import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesFocus = () => (
  <div>
    <h4>Focus</h4>
    <Sandbox>
      <button className="button is-focused">Focus</button>
      <button className="button is-primary is-focused">Focus</button>
      <button className="button is-link is-focused">Focus</button>
      <button className="button is-info is-focused">Focus</button>
      <button className="button is-success is-focused">Focus</button>
      <button className="button is-warning is-focused">Focus</button>
      <button className="button is-danger is-focused">Focus</button>
    </Sandbox>
  </div>
)

export default ButtonStatesFocus
