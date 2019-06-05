import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const OptionsCentering = () => (
  <div>
    <h3>Centering</h3>
    <Sandbox>
      <div className="columns is-mobile is-centered">
        <div className="column is-half">
          <p className="bd-notification is-primary">is-half</p>
        </div>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="columns is-mobile is-multiline is-centered">
        <div className="column is-narrow">
          <p className="bd-notification is-primary">is-narrow First Column</p>
        </div>
        <div className="column is-narrow">
          <p className="bd-notification is-primary">is-narrow Our Second Column</p>
        </div>
        <div className="column is-narrow">
          <p className="bd-notification is-primary">is-narrow Third Column</p>
        </div>
        <div className="column is-narrow">
          <p className="bd-notification is-primary">is-narrow The Fourth Column</p>
        </div>
        <div className="column is-narrow">
          <p className="bd-notification is-primary">is-narrow Fifth Column</p>
        </div>
      </div>
    </Sandbox>
  </div>
)
export default OptionsCentering
