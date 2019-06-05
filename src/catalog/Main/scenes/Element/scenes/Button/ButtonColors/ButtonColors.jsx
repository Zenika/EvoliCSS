import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonColors = () => (
  <div>
    <h3>Colors</h3>
    <Sandbox>
      <button className="button is-white">White</button>
      <button className="button is-light">Light</button>
      <button className="button is-dark">Dark</button>
      <button className="button is-black">Black</button>
      <button className="button is-text">Text</button>
    </Sandbox>
    <Sandbox>
      <button className="button is-primary">Primary</button>
      <button className="button is-link">Link</button>
      <button className="button is-info">Info</button>
      <button className="button is-success">Success</button>
      <button className="button is-warning">Warning</button>
      <button className="button is-danger">Danger</button>
    </Sandbox>
  </div>
)

export default ButtonColors
