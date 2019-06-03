import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TagModifiers = () => (
  <div>
    <h3>Modifiers</h3>
    <Sandbox>
      <span className="tag is-rounded">Rounded</span>
    </Sandbox>
    <Sandbox>
      <button className="tag is-delete" />
    </Sandbox>
  </div>
)

export default TagModifiers
