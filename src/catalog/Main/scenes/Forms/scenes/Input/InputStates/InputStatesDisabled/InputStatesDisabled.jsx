import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputStylesDisabled = () => (
  <div>
    <h3>Disabled</h3>
    <Sandbox>
      <div class="control">
        <input class="input" type="text" placeholder="Disabled input" disabled />
      </div>
    </Sandbox>
  </div>
)

export default InputStylesDisabled
