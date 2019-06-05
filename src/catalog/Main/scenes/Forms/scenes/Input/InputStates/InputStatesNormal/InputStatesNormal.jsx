import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputStatesNormal = () => (
  <div>
    <h3>Normal</h3>
    <Sandbox>
      <div className="control">
        <input className="input" type="text" placeholder="Normal input" />
      </div>
    </Sandbox>
  </div>
)

export default InputStatesNormal
