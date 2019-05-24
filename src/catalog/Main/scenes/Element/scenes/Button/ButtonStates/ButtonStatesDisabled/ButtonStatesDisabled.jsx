import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesDisabled = () => (
  <div>
    <h4>Disabled</h4>
    <Sandbox>
      <a className="button" title="Disabled button" disabled>
        Disabled
      </a>
      <a className="button is-primary" title="Disabled button" disabled>
        Disabled
      </a>
      <a className="button is-link" title="Disabled button" disabled>
        Disabled
      </a>
      <a className="button is-info" title="Disabled button" disabled>
        Disabled
      </a>
      <a className="button is-success" title="Disabled button" disabled>
        Disabled
      </a>
      <a className="button is-warning" title="Disabled button" disabled>
        Disabled
      </a>
      <a className="button is-danger" title="Disabled button" disabled>
        Disabled
      </a>
    </Sandbox>
  </div>
)

export default ButtonStatesDisabled
