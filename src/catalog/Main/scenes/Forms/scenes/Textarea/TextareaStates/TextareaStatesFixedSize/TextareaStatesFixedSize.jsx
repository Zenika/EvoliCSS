import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TextareaStatesFixedSize = () => (
  <div>
    <h3>Fixed size</h3>
    <Sandbox>
      <div className="control">
        <textarea className="textarea has-fixed-size" placeholder="Fixed size textarea" />
      </div>
    </Sandbox>
  </div>
)

export default TextareaStatesFixedSize
