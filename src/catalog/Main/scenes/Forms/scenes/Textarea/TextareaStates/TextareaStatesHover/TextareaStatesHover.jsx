import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TextareaStatesHover = () => (
  <div>
    <h3>Hover</h3>
    <Sandbox>
      <div className="control">
        <textarea className="textarea is-hovered" placeholder="Hovered textarea" />
      </div>
    </Sandbox>
  </div>
)

export default TextareaStatesHover
