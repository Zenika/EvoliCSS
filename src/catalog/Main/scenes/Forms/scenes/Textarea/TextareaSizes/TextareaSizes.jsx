import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TextareaSizes = () => (
  <div>
    <h3>Sizes</h3>
    <Sandbox>
      <div class="field">
        <div class="control">
          <textarea class="textarea is-small" placeholder="Small textarea" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Normal textarea" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea is-medium" placeholder="Medium textarea" />
        </div>
      </div>
      <div class="field">
        <div class="control">
          <textarea class="textarea is-large" placeholder="Large textarea" />
        </div>
      </div>
    </Sandbox>
  </div>
)

export default TextareaSizes
