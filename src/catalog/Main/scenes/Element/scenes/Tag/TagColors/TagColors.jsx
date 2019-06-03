import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TagColors = () => (
  <div>
    <h3>Colors</h3>
    <Sandbox>
      <span className="tag is-black">Black</span>
      <span className="tag is-dark">Dark</span>
      <span className="tag is-light">Light</span>
      <span className="tag is-white">White</span>
      <span className="tag is-primary">Primary</span>
      <span className="tag is-link">Link</span>
      <span className="tag is-info">Info</span>
      <span className="tag is-success">Success</span>
      <span className="tag is-warning">Warning</span>
      <span className="tag is-danger">Danger</span>
    </Sandbox>
  </div>
)

export default TagColors
