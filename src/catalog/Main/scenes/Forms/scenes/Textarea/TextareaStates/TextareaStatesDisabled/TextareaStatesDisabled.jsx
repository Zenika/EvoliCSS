import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TextareaStatesDisabled = () => (
  <div>
    <h3>Disabled</h3>
    <Sandbox>
      <div className="control">
        <textarea className="textarea" placeholder="Disabled textarea" disabled />
      </div>
    </Sandbox>
  </div>
)

export default TextareaStatesDisabled
