import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ResponsivenessMobile = () => (
  <div>
    <h3>Responsiveness</h3>
    <Sandbox>
      <div className="columns is-mobile">
        <div className="column">1</div>
        <div className="column">2</div>
        <div className="column">3</div>
        <div className="column">4</div>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="columns is-desktop">
        <div className="column">1</div>
        <div className="column">2</div>
        <div className="column">3</div>
        <div className="column">4</div>
      </div>
    </Sandbox>
  </div>
)
export default ResponsivenessMobile
