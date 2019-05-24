import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonAddons = () => (
  <div>
    <h3>Addons</h3>
    <Sandbox>
      <a className="button">
        <div className="field has-addons">
          <p className="control">
            <a className="button">
              <span className="icon is-small">
                <i className="fas fa-align-left" />
              </span>
              <span>Left</span>
            </a>
          </p>
          <p className="control">
            <a className="button">
              <span className="icon is-small">
                <i className="fas fa-align-center" />
              </span>
              <span>Center</span>
            </a>
          </p>
          <p className="control">
            <a className="button">
              <span className="icon is-small">
                <i className="fas fa-align-right" />
              </span>
              <span>Right</span>
            </a>
          </p>
        </div>
      </a>
    </Sandbox>
  </div>
)

export default ButtonAddons
