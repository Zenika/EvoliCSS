import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TextareaStatesNormal = () => (
  <div>
    <h3>Normal</h3>
    <Sandbox>
      <div className="control">
        <textarea className="textarea" placeholder="Normal textarea" />
      </div>
    </Sandbox>
  </div>
)

export default TextareaStatesNormal
