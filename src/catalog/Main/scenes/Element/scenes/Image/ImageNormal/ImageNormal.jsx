import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ImageNormal = () => (
  <div>
    <h3>Normal</h3>
    <Sandbox>
      <figure className="image is-128x128">
        <img alt="is-128x128" src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>
    </Sandbox>
  </div>
)

export default ImageNormal
