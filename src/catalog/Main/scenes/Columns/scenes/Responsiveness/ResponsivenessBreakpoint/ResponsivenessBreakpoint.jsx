import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ResponsivenessBreakpoint = () => (
  <div>
    <h3>Breakpoint</h3>
    <Sandbox>
      <div className="columns is-mobile">
        <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
          <p>is-three-quarters-mobile</p>
          <br />
          <p>is-two-thirds-tablet</p>
          <br />
          <p>is-half-desktop</p>
          <br />
          <p>is-one-third-widescreen</p>
          <br />
          <p>is-one-quarter-fullhd</p>
        </div>
        <div className="column">2</div>
        <div className="column">3</div>
        <div className="column">4</div>
        <div className="column">5</div>
      </div>
    </Sandbox>
  </div>
)
export default ResponsivenessBreakpoint
