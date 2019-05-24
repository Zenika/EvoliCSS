import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonSizes = () => (
  <div>
    <h3>Sizes</h3>
    <Sandbox>
      <div className="buttons are-medium">
        <a className="button">All</a>
        <a className="button">Medium</a>
        <a className="button">Size</a>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="buttons are-small">
        <a className="button">Small</a>
        <a className="button">Small</a>
        <a className="button">Small</a>
        <a className="button is-normal">Normal</a>
        <a className="button">Small</a>
      </div>
    </Sandbox>
    <Sandbox>
      <a className="button is-small is-fullwidth">Small</a>
      <a className="button is-fullwidth">Normal</a>
      <a className="button is-medium is-fullwidth">Medium</a>
      <a className="button is-large is-fullwidth">Large</a>
    </Sandbox>
  </div>
)

export default ButtonSizes
