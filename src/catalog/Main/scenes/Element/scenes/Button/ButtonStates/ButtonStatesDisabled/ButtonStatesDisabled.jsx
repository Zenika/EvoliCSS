import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesDisabled = () => (
  <div>
    <h4>Disabled</h4>
    <Sandbox>
      <button className="button" title="Disabled button" disabled>
        Disabled
      </button>
      <button className="button is-primary" title="Disabled button" disabled>
        Disabled
      </button>
      <button className="button is-link" title="Disabled button" disabled>
        Disabled
      </button>
      <button className="button is-info" title="Disabled button" disabled>
        Disabled
      </button>
      <button className="button is-success" title="Disabled button" disabled>
        Disabled
      </button>
      <button className="button is-warning" title="Disabled button" disabled>
        Disabled
      </button>
      <button className="button is-danger" title="Disabled button" disabled>
        Disabled
      </button>
    </Sandbox>
  </div>
)

export default ButtonStatesDisabled
