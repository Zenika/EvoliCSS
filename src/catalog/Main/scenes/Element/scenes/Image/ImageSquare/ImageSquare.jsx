import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ImageSquare = () => (
  <div>
    <h3>Square</h3>
    <Sandbox>
      <figure className="image is-16x16">
        <img alt="is-16x16" src="https://bulma.io/images/placeholders/16x16.png" />
      </figure>
      <figure className="image is-24x24">
        <img alt="is-24x24" src="https://bulma.io/images/placeholders/24x24.png" />
      </figure>
      <figure className="image is-32x32">
        <img alt="is-32x32" src="https://bulma.io/images/placeholders/32x32.png" />
      </figure>
      <figure className="image is-48x48">
        <img alt="is-48x48" src="https://bulma.io/images/placeholders/48x48.png" />
      </figure>
      <figure className="image is-64x64">
        <img alt="is-64x64" src="https://bulma.io/images/placeholders/64x64.png" />
      </figure>
      <figure className="image is-96x96">
        <img alt="is-96x96" src="https://bulma.io/images/placeholders/96x96.png" />
      </figure>
      <figure className="image is-128x128">
        <img alt="is-128x128" src="https://bulma.io/images/placeholders/128x128.png" />
      </figure>
    </Sandbox>
  </div>
)

export default ImageSquare
