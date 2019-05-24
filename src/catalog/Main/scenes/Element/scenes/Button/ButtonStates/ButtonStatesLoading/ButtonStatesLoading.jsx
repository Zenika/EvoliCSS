import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesLoading = () => (
  <div>
    <h4>Loading</h4>
    <Sandbox>
      <a className="button is-loading">Loading</a>
      <a className="button is-primary is-loading">Loading</a>
      <a className="button is-link is-loading">Loading</a>
      <a className="button is-info is-loading">Loading</a>
      <a className="button is-success is-loading">Loading</a>
      <a className="button is-warning is-loading">Loading</a>
      <a className="button is-danger is-loading">Loading</a>
    </Sandbox>
  </div>
)

export default ButtonStatesLoading
