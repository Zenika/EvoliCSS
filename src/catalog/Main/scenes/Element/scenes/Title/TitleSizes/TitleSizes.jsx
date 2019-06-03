import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TitleSizes = () => (
  <div>
    <h2>Sizes</h2>
    <Sandbox>
      <h1 className="title is-1">Title 1</h1>
      <h2 className="title is-2">Title 2</h2>
      <h3 className="title is-3">Title 3</h3>
      <h4 className="title is-4">Title 4</h4>
      <h5 className="title is-5">Title 5</h5>
      <h6 className="title is-6">Title 6</h6>
    </Sandbox>
    <Sandbox>
      <h1 className="subtitle is-1">Subtitle 1</h1>
      <h2 className="subtitle is-2">Subtitle 2</h2>
      <h3 className="subtitle is-3">Subtitle 3</h3>
      <h4 className="subtitle is-4">Subtitle 4</h4>
      <h5 className="subtitle is-5">Subtitle 5</h5>
      <h6 className="subtitle is-6">Subtitle 6</h6>
    </Sandbox>
    <Sandbox>
      <p className="title is-1">Title 1</p>
      <p className="subtitle is-3">Subtitle 3</p>

      <p className="title is-2">Title 2</p>
      <p className="subtitle is-4">Subtitle 4</p>

      <p className="title is-3">Title 3</p>
      <p className="subtitle is-5">Subtitle 5</p>
    </Sandbox>
    <Sandbox>
      <p className="title is-1 is-spaced">Title 1</p>
      <p className="subtitle is-3">Subtitle 3</p>

      <p className="title is-2 is-spaced">Title 2</p>
      <p className="subtitle is-4">Subtitle 4</p>

      <p className="title is-3 is-spaced">Title 3</p>
      <p className="subtitle is-5">Subtitle 5</p>
    </Sandbox>
  </div>
)

export default TitleSizes
