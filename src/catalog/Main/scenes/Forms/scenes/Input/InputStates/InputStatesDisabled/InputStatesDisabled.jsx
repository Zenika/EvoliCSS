import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputStylesDisabled = () => (
  <div>
    <h3>Disabled</h3>
    <Sandbox>
      <div className="control">
        <input className="input" type="text" placeholder="Disabled input" disabled />
      </div>
    </Sandbox>
  </div>
)

export default InputStylesDisabled
