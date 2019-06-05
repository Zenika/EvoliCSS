import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SizesOffset = () => (
  <div>
    <h2>Offset</h2>
    <Sandbox>
      <div className="columns is-mobile">
        <div className="column is-half is-offset-one-quarter">
          <p>is-half is-offset-one-quarter</p>
        </div>
      </div>

      <div className="columns is-mobile">
        <div className="column is-three-fifths is-offset-one-fifth">
          <p>is-three-fifths is-offset-one-fifth</p>
        </div>
      </div>

      <div className="columns is-mobile">
        <div className="column is-4 is-offset-8">
          <p>is-4 is-offset-8</p>
        </div>
      </div>

      <div className="columns is-mobile">
        <div className="column is-11 is-offset-1">
          <p>is-11 is-offset-1</p>
        </div>
      </div>
    </Sandbox>
  </div>
)
export default SizesOffset
