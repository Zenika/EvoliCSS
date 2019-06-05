import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TagCombinations = () => (
  <div>
    <h3>Combinations</h3>
    <Sandbox>
      <span className="tag is-success">
        Bar
        <button className="delete is-small" />
      </span>
      <span className="tag is-warning is-medium">
        Hello
        <button className="delete is-small" />
      </span>
      <span className="tag is-danger is-large">
        World
        <button className="delete" />
      </span>
    </Sandbox>
  </div>
)

export default TagCombinations
