import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputStylesFocus = () => (
  <div>
    <h3>Focus</h3>
    <Sandbox>
      <div className="control">
        <input className="input is-focused" type="text" placeholder="Focused input" />
      </div>
    </Sandbox>
  </div>
)

export default InputStylesFocus
