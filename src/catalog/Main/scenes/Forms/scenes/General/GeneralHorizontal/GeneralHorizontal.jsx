import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const GeneralHorizontal = () => (
  <div>
    <h3>Horizontal</h3>
    <Sandbox>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">From</label>
        </div>
        <div className="field-body">
          <div className="field">
            <p className="control is-expanded has-icons-left">
              <input className="input" type="text" placeholder="Name" />
              <span className="icon is-small is-left">
                <i className="fas fa-user" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control is-expanded has-icons-left has-icons-right">
              <input
                className="input is-success"
                type="email"
                placeholder="Email"
                value="alex@smith.com"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check" />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label" />
        <div className="field-body">
          <div className="field is-expanded">
            <div className="field has-addons">
              <p className="control">
                <button className="button is-static">+44</button>
              </p>
              <p className="control is-expanded">
                <input className="input" type="tel" placeholder="Your phone number" />
              </p>
            </div>
            <p className="help">Do not enter the first zero</p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Department</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <div className="select is-fullwidth">
                <select>
                  <option>Business development</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">Already a member?</label>
        </div>
        <div className="field-body">
          <div className="field is-narrow">
            <div className="control">
              <label className="radio">
                <input type="radio" name="member" />
                Yes
              </label>
              <label className="radio">
                <input type="radio" name="member" />
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Subject</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className="input is-danger"
                type="text"
                placeholder="e.g. Partnership opportunity"
              />
            </div>
            <p className="help is-danger">This field is required</p>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Question</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <textarea className="textarea" placeholder="Explain how we can help you" />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label" />
        <div className="field-body">
          <div className="field">
            <div className="control">
              <button className="button is-primary">Send message</button>
            </div>
          </div>
        </div>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field is-horizontal">
        <div className="field-label">
          <label className="label">No padding</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" />
                Checkbox
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-small">
          <label className="label">Small padding</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input is-small" type="text" placeholder="Small sized input" />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Normal label</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input" type="text" placeholder="Normal sized input" />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-medium">
          <label className="label">Medium label</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input is-medium" type="text" placeholder="Medium sized input" />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-large">
          <label className="label">Large label</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input className="input is-large" type="text" placeholder="Large sized input" />
            </div>
          </div>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default GeneralHorizontal
