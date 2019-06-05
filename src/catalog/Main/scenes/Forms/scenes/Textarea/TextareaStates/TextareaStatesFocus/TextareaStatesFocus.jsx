import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TextareaStatesFocus = () => (
  <div>
    <h3>Focus</h3>
    <Sandbox>
      <div className="control">
        <textarea className="textarea is-focused" placeholder="Focused textarea" />
      </div>
    </Sandbox>
  </div>
)

export default TextareaStatesFocus
