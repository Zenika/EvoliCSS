import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TextareaStatesReadOnly = () => (
  <div>
    <h3>Read only</h3>
    <Sandbox>
      <div className="control">
        <textarea className="textarea" readonly>
          This content is readonly
        </textarea>
      </div>
    </Sandbox>
  </div>
)

export default TextareaStatesReadOnly
