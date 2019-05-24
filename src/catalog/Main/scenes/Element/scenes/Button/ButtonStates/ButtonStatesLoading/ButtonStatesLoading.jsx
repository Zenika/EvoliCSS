import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesLoading = () => (
  <div>
    <h4>Loading</h4>
    <Sandbox>
      <button className="button is-loading">Loading</button>
      <button className="button is-primary is-loading">Loading</button>
      <button className="button is-link is-loading">Loading</button>
      <button className="button is-info is-loading">Loading</button>
      <button className="button is-success is-loading">Loading</button>
      <button className="button is-warning is-loading">Loading</button>
      <button className="button is-danger is-loading">Loading</button>
    </Sandbox>
  </div>
)

export default ButtonStatesLoading
