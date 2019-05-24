import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonGroupAddons = () => (
  <div>
    <h3>Group addons</h3>
    <Sandbox>
      <div className="field has-addons">
        <p className="control">
          <a className="button">
            <span className="icon is-small">
              <i className="fas fa-bold" />
            </span>
            <span>Bold</span>
          </a>
        </p>
        <p className="control">
          <a className="button">
            <span className="icon is-small">
              <i className="fas fa-italic" />
            </span>
            <span>Italic</span>
          </a>
        </p>
        <p className="control">
          <a className="button">
            <span className="icon is-small">
              <i className="fas fa-underline" />
            </span>
            <span>Underline</span>
          </a>
        </p>
      </div>

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
    </Sandbox>
  </div>
)

export default ButtonGroupAddons
