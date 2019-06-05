import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const NestingNormal = () => (
  <div>
    <h3>Normal</h3>
    <Sandbox>
      <div className="columns">
        <div className="column">
          <p className="bd-notification is-info">First column</p>
          <div className="columns is-mobile">
            <div className="column">
              <p className="bd-notification is-info">First nested column</p>
            </div>
            <div className="column">
              <p className="bd-notification is-info">Second nested column</p>
            </div>
          </div>
        </div>
        <div className="column">
          <p className="bd-notification is-danger">Second column</p>
          <div className="columns is-mobile">
            <div className="column is-half">
              <p className="bd-notification is-danger">50%</p>
            </div>
            <div className="column">
              <p className="bd-notification is-danger">Auto</p>
            </div>
            <div className="column">
              <p className="bd-notification is-danger">Auto</p>
            </div>
          </div>
        </div>
      </div>
    </Sandbox>
  </div>
)
export default NestingNormal
