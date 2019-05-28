import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputStylesFocus = () => (
  <div>
    <h3>Focus</h3>
    <Sandbox>
      <div class="control">
        <input class="input is-focused" type="text" placeholder="Focused input" />
      </div>
    </Sandbox>
  </div>
)

export default InputStylesFocus
