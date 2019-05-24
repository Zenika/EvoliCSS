import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonGroupAddons = () => (
  <div>
    <h3>Group addons</h3>
    <Sandbox>
      <div className="field has-addons">
        <p className="control">
          <button className="button">
            <span className="icon is-small">
              <i className="fas fa-bold" />
            </span>
            <span>Bold</span>
          </button>
        </p>
        <p className="control">
          <button className="button">
            <span className="icon is-small">
              <i className="fas fa-italic" />
            </span>
            <span>Italic</span>
          </button>
        </p>
        <p className="control">
          <button className="button">
            <span className="icon is-small">
              <i className="fas fa-underline" />
            </span>
            <span>Underline</span>
          </button>
        </p>
      </div>

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
    </Sandbox>
  </div>
)

export default ButtonGroupAddons
