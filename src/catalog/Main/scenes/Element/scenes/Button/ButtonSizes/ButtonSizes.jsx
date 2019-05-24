import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonSizes = () => (
  <div>
    <h3>Sizes</h3>
    <Sandbox>
      <div className="buttons are-medium">
        <button className="button">All</button>
        <button className="button">Medium</button>
        <button className="button">Size</button>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="buttons are-small">
        <button className="button">Small</button>
        <button className="button">Small</button>
        <button className="button">Small</button>
        <button className="button is-normal">Normal</button>
        <button className="button">Small</button>
      </div>
    </Sandbox>
    <Sandbox>
      <button className="button is-small is-fullwidth">Small</button>
      <button className="button is-fullwidth">Normal</button>
      <button className="button is-medium is-fullwidth">Medium</button>
      <button className="button is-large is-fullwidth">Large</button>
    </Sandbox>
  </div>
)

export default ButtonSizes
