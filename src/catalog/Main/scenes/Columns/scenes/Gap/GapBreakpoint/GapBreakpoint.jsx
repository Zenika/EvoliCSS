import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const GapBreakpoint = () => (
  <div>
    <h3>Breakpoint</h3>
    <Sandbox>
      <div className="columns is-variable is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd">
        <div className="column">Column</div>
        <div className="column">Column</div>
        <div className="column">Column</div>
        <div className="column">Column</div>
        <div className="column">Column</div>
        <div className="column">Column</div>
      </div>
    </Sandbox>
  </div>
)
export default GapBreakpoint
