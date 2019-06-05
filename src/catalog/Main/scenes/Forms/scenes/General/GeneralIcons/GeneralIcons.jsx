import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const GeneralIcons = () => (
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
      <div className="field">
        <p className="control">
          <button className="button is-success">Login</button>
        </p>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field">
        <p className="control has-icons-left">
          <span className="select">
            <select>
              <option selected>Country</option>
              <option>Select dropdown</option>
              <option>With options</option>
            </select>
          </span>
          <span className="icon is-small is-left">
            <i className="fas fa-globe" />
          </span>
        </p>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field">
        <label className="label is-small">Small input</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-small" type="email" placeholder="Normal" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check" />
          </span>
        </div>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field">
        <label className="label">Normal input</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Extra small" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope fa-xs" />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check fa-xs" />
          </span>
        </div>
      </div>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input className="input" type="email" placeholder="Normal" />
          <span className="icon is-left">
            <i className="fas fa-envelope" />
          </span>
          <span className="icon is-right">
            <i className="fas fa-check" />
          </span>
        </div>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field">
        <label className="label is-medium">Medium input</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-medium" type="email" placeholder="Extra small" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope fa-xs" />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check fa-xs" />
          </span>
        </div>
      </div>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input className="input is-medium" type="email" placeholder="Small" />
          <span className="icon is-left">
            <i className="fas fa-envelope fa-sm" />
          </span>
          <span className="icon is-right">
            <i className="fas fa-check fa-sm" />
          </span>
        </div>
      </div>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input className="input is-medium" type="email" placeholder="Normal" />
          <span className="icon is-medium is-left">
            <i className="fas fa-envelope" />
          </span>
          <span className="icon is-medium is-right">
            <i className="fas fa-check" />
          </span>
        </div>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field">
        <label className="label is-large">Large input</label>
        <div className="control has-icons-left has-icons-right">
          <input className="input is-large" type="email" placeholder="Extra small" />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope fa-xs" />
          </span>
          <span className="icon is-small is-right">
            <i className="fas fa-check fa-xs" />
          </span>
        </div>
      </div>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input className="input is-large" type="email" placeholder="Small" />
          <span className="icon is-left">
            <i className="fas fa-envelope fa-sm" />
          </span>
          <span className="icon is-right">
            <i className="fas fa-check fa-sm" />
          </span>
        </div>
      </div>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input className="input is-large" type="email" placeholder="Normal" />
          <span className="icon is-large is-left">
            <i className="fas fa-envelope" />
          </span>
          <span className="icon is-large is-right">
            <i className="fas fa-check" />
          </span>
        </div>
      </div>

      <div className="field">
        <div className="control has-icons-left has-icons-right">
          <input className="input is-large" type="email" placeholder="Large" />
          <span className="icon is-medium is-left">
            <i className="fas fa-envelope fa-lg" />
          </span>
          <span className="icon is-medium is-right">
            <i className="fas fa-check fa-lg" />
          </span>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default GeneralIcons
