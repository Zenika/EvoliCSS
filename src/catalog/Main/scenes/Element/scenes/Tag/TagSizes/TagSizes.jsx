import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TagSizes = () => (
  <div>
    <h3>Sizes</h3>
    <Sandbox>
      <span className="tag is-link is-normal">Normal</span>
      <span className="tag is-primary is-medium">Medium</span>
      <span className="tag is-info is-large">Large</span>
    </Sandbox>
    <Sandbox>
      <div className="tags are-medium">
        <span className="tag">All</span>
        <span className="tag">Medium</span>
        <span className="tag">Size</span>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="tags are-large">
        <span className="tag">All</span>
        <span className="tag">Large</span>
        <span className="tag">Size</span>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="tags are-medium">
        <span className="tag">Medium</span>
        <span className="tag is-normal">Normal</span>
        <span className="tag">Medium</span>
        <span className="tag is-large">Large</span>
        <span className="tag">Medium</span>
      </div>
    </Sandbox>
  </div>
)

export default TagSizes
