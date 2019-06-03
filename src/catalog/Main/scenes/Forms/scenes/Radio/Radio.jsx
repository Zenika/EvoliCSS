import React from 'react'
import Figma from 'catalog/components/Figma'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const Radio = () => (
  <div>
    <h2>Radio</h2>
    <Figma nodeId="4%253A194" />
    <Sandbox>
      <div class="control">
        <label class="radio">
          <input type="radio" name="answer" />
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="answer" />
          No
        </label>
      </div>
    </Sandbox>
    <Sandbox>
      <div class="control">
        <label class="radio">
          <input type="radio" name="foobar" />
          Foo
        </label>
        <label class="radio">
          <input type="radio" name="foobar" checked />
          Bar
        </label>
      </div>
    </Sandbox>
    <Sandbox>
      <div class="control">
        <label class="radio">
          <input type="radio" name="rsvp" />
          Going
        </label>
        <label class="radio">
          <input type="radio" name="rsvp" />
          Not going
        </label>
        <label class="radio" disabled>
          <input type="radio" name="rsvp" disabled />
          Maybe
        </label>
      </div>
    </Sandbox>
  </div>
)

export default Radio
