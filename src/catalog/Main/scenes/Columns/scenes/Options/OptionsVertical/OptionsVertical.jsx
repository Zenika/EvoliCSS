import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const OptionsVertical = () => (
  <div>
    <h3>Vertical</h3>
    <Sandbox>
      <div className="columns is-vcentered">
        <div className="column is-8">
          <p className="bd-notification is-primary">First column</p>
        </div>
        <div className="column">
          <p className="bd-notification is-primary">
            Second column with more content. This is so you can see the vertical alignment.
          </p>
        </div>
      </div>
    </Sandbox>
  </div>
)
export default OptionsVertical
