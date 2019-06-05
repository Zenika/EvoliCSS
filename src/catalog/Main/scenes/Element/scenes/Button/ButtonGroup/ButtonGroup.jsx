import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonGroup = () => (
  <div>
    <h3>Group</h3>
    <Sandbox>
      <div className="field is-grouped">
        <p className="control">
          <button className="button is-link">Save changes</button>
        </p>
        <p className="control">
          <button className="button">Cancel</button>
        </p>
        <p className="control">
          <button className="button is-danger">Delete post</button>
        </p>
      </div>
    </Sandbox>
  </div>
)

export default ButtonGroup
