import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputStylesReadOnly = () => (
  <div>
    <h3>Read only</h3>
    <Sandbox>
      <div className="control">
        <input className="input" type="text" value="This text is readonly" readonly />
      </div>
    </Sandbox>
  </div>
)

export default InputStylesReadOnly
