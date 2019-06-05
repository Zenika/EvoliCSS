import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const SizesNarrow = () => (
  <div>
    <h2>Narrow</h2>
    <Sandbox>
      <div className="columns">
        <div className="column is-narrow">
          <div className="box">
            <p className="title is-5">Narrow column</p>
            <p className="subtitle">This column is only 200px wide.</p>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <p className="title is-5">Flexible column</p>
            <p className="subtitle">This column will take up the remaining space available.</p>
          </div>
        </div>
      </div>
    </Sandbox>
  </div>
)
export default SizesNarrow
