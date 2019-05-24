import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonColors = () => (
  <div>
    <h3>Colors</h3>
    <Sandbox>
      <a className="button is-white">White</a>
      <a className="button is-light">Light</a>
      <a className="button is-dark">Dark</a>
      <a className="button is-black">Black</a>
      <a className="button is-text">Text</a>
    </Sandbox>
    <Sandbox>
      <a className="button is-primary">Primary</a>
      <a className="button is-link">Link</a>
      <a className="button is-info">Info</a>
      <a className="button is-success">Success</a>
      <a className="button is-warning">Warning</a>
      <a className="button is-danger">Danger</a>
    </Sandbox>
  </div>
)

export default ButtonColors
