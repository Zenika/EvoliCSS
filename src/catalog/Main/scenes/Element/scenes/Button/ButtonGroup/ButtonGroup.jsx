import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonGroup = () => (
  <div>
    <h3>Group</h3>
    <Sandbox>
      <div className="field is-grouped">
        <p className="control">
          <a className="button is-link">Save changes</a>
        </p>
        <p className="control">
          <a className="button">Cancel</a>
        </p>
        <p className="control">
          <a className="button is-danger">Delete post</a>
        </p>
      </div>
    </Sandbox>
  </div>
)

export default ButtonGroup
