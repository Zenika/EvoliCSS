import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const GeneralGroup = () => (
  <div>
    <h3>Group</h3>
    <Sandbox>
      <div className="field is-grouped">
        <p className="control">
          <button className="button is-primary">Submit</button>
        </p>
        <p className="control">
          <button className="button is-light">Cancel</button>
        </p>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field is-grouped is-grouped-centered">
        <p className="control">
          <button className="button is-primary">Submit</button>
        </p>
        <p className="control">
          <button className="button is-light">Cancel</button>
        </p>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field is-grouped is-grouped-right">
        <p className="control">
          <button className="button is-primary">Submit</button>
        </p>
        <p className="control">
          <button className="button is-light">Cancel</button>
        </p>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field is-grouped">
        <p className="control is-expanded">
          <input className="input" type="text" placeholder="Find a repository" />
        </p>
        <p className="control">
          <button className="button is-info">Search</button>
        </p>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field is-grouped is-grouped-multiline">
        <p className="control">
          <button className="button">One</button>
        </p>
        <p className="control">
          <button className="button">Two</button>
        </p>
        <p className="control">
          <button className="button">Three</button>
        </p>
        <p className="control">
          <button className="button">Four</button>
        </p>
        <p className="control">
          <button className="button">Five</button>
        </p>
        <p className="control">
          <button className="button">Size</button>
        </p>
        <p className="control">
          <button className="button">Seven</button>
        </p>
        <p className="control">
          <button className="button">Eight</button>
        </p>
        <p className="control">
          <button className="button">Nine</button>
        </p>
        <p className="control">
          <button className="button">Ten</button>
        </p>
        <p className="control">
          <button className="button">Eleven</button>
        </p>
        <p className="control">
          <button className="button">Twelve</button>
        </p>
        <p className="control">
          <button className="button">Thirteen</button>
        </p>
      </div>
    </Sandbox>
  </div>
)

export default GeneralGroup
