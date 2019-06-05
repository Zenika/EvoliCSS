import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonAddons = () => (
  <div>
    <h3>Addons</h3>
    <Sandbox>
      <button className="button">
        <div className="field has-addons">
          <p className="control">
            <button className="button">
              <span className="icon is-small">
                <i className="fas fa-align-left" />
              </span>
              <span>Left</span>
            </button>
          </p>
          <p className="control">
            <button className="button">
              <span className="icon is-small">
                <i className="fas fa-align-center" />
              </span>
              <span>Center</span>
            </button>
          </p>
          <p className="control">
            <button className="button">
              <span className="icon is-small">
                <i className="fas fa-align-right" />
              </span>
              <span>Right</span>
            </button>
          </p>
        </div>
      </button>
    </Sandbox>
  </div>
)

export default ButtonAddons
