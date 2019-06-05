import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const OptionsMultiline = () => (
  <div>
    <h3>Multiline</h3>
    <Sandbox>
      <div className="columns is-multiline is-mobile">
        <div className="column is-one-quarter">
          <p>is-one-quarter</p>
        </div>
        <div className="column is-one-quarter">
          <p>is-one-quarter</p>
        </div>
        <div className="column is-one-quarter">
          <p>is-one-quarter</p>
        </div>
        <div className="column is-one-quarter">
          <p>is-one-quarter</p>
        </div>
        <div className="column is-half">
          <p>is-half</p>
        </div>
        <div className="column is-one-quarter">
          <p>is-one-quarter</p>
        </div>
        <div className="column is-one-quarter">
          <p>is-one-quarter</p>
        </div>
        <div className="column is-one-quarter">
          <p>is-one-quarter</p>
        </div>
        <div className="column">Auto</div>
      </div>
    </Sandbox>
  </div>
)
export default OptionsMultiline
