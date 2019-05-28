import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const InputIcons = () => (
  <div>
    <h3>Icons</h3>
    <Sandbox>
      <div className="field">
        <p className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Email" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check" />
          </span>
        </p>
      </div>
      <div className="field">
        <p className="control has-icons-left">
          <input className="input" type="password" placeholder="Password" />
          <span className="icon is-small is-left">
            <i className="fas fa-lock" />
          </span>
        </p>
      </div>
    </Sandbox>
  </div>
)

export default InputIcons
