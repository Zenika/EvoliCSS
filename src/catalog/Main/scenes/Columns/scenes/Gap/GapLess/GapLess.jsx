import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const GapLess = () => (
  <div>
    <h3>Gapless</h3>
    <Sandbox>
      <div className="columns is-gapless">
        <div className="column">No gap</div>
        <div className="column">No gap</div>
        <div className="column">No gap</div>
        <div className="column">No gap</div>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="columns is-gapless is-multiline is-mobile">
        <div className="column is-one-quarter">is-one-quarter</div>
        <div className="column is-one-quarter">is-one-quarter</div>
        <div className="column is-one-quarter">is-one-quarter</div>
        <div className="column is-one-quarter">is-one-quarter</div>
        <div className="column is-half">is-half</div>
        <div className="column is-one-quarter">is-one-quarter</div>
        <div className="column is-one-quarter">is-one-quarter</div>
        <div className="column is-one-quarter">is-one-quarter</div>
        <div className="column">Auto</div>
      </div>
    </Sandbox>
  </div>
)
export default GapLess
