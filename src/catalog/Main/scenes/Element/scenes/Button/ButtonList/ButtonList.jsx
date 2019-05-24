import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonList = () => (
  <div>
    <h3>List</h3>
    <Sandbox>
      <div className="buttons">
        <span className="button is-success">Save changes</span>
        <span className="button is-info">Save and continue</span>
        <span className="button is-danger">Cancel</span>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="buttons">
        <span className="button">One</span>
        <span className="button">Two</span>
        <span className="button">Three</span>
        <span className="button">Four</span>
        <span className="button">Five</span>
        <span className="button">Six</span>
        <span className="button">Seven</span>
        <span className="button">Eight</span>
        <span className="button">Nine</span>
        <span className="button">Ten</span>
        <span className="button">Eleven</span>
        <span className="button">Twelve</span>
        <span className="button">Thirteen</span>
        <span className="button">Fourteen</span>
        <span className="button">Fifteen</span>
        <span className="button">Sixteen</span>
        <span className="button">Seventeen</span>
        <span className="button">Eighteen</span>
        <span className="button">Nineteen</span>
        <span className="button">Twenty</span>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="buttons has-addons">
        <span className="button">Yes</span>
        <span className="button">Maybe</span>
        <span className="button">No</span>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="buttons has-addons is-centered">
        <span className="button">Yes</span>
        <span className="button">Maybe</span>
        <span className="button">No</span>
      </div>

      <div className="buttons has-addons is-right">
        <span className="button">Yes</span>
        <span className="button">Maybe</span>
        <span className="button">No</span>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="buttons has-addons">
        <span className="button is-success is-selected">Yes</span>
        <span className="button">Maybe</span>
        <span className="button">No</span>
      </div>

      <div className="buttons has-addons">
        <span className="button">Yes</span>
        <span className="button is-info is-selected">Maybe</span>
        <span className="button">No</span>
      </div>

      <div className="buttons has-addons">
        <span className="button">Yes</span>
        <span className="button">Maybe</span>
        <span className="button is-danger is-selected">No</span>
      </div>
    </Sandbox>
  </div>
)

export default ButtonList
