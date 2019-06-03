import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const TagList = () => (
  <div>
    <h3>List</h3>
    <Sandbox>
      <div className="tags">
        <span className="tag">One</span>
        <span className="tag">Two</span>
        <span className="tag">Three</span>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="tags">
        <span className="tag">One</span>
        <span className="tag">Two</span>
        <span className="tag">Three</span>
        <span className="tag">Four</span>
        <span className="tag">Five</span>
        <span className="tag">Six</span>
        <span className="tag">Seven</span>
        <span className="tag">Eight</span>
        <span className="tag">Nine</span>
        <span className="tag">Ten</span>
        <span className="tag">Eleven</span>
        <span className="tag">Twelve</span>
        <span className="tag">Thirteen</span>
        <span className="tag">Fourteen</span>
        <span className="tag">Fifteen</span>
        <span className="tag">Sixteen</span>
        <span className="tag">Seventeen</span>
        <span className="tag">Eighteen</span>
        <span className="tag">Nineteen</span>
        <span className="tag">Twenty</span>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="tags has-addons">
        <span className="tag">Package</span>
        <span className="tag is-primary">Bulma</span>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="tags has-addons">
        <span className="tag is-danger">Alex Smith</span>
        <button className="tag is-delete" />
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field is-grouped is-grouped-multiline">
        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">npm</span>
            <span className="tag is-info">0.5.0</span>
          </div>
        </div>

        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">build</span>
            <span className="tag is-success">passing</span>
          </div>
        </div>

        <div className="control">
          <div className="tags has-addons">
            <span className="tag is-dark">chat</span>
            <span className="tag is-primary">on gitter</span>
          </div>
        </div>
      </div>
    </Sandbox>
    <Sandbox>
      <div className="field is-grouped is-grouped-multiline">
        <div className="control">
          <div className="tags has-addons">
            <button className="tag is-link">Technology</button>
            <button className="tag is-delete" />
          </div>
        </div>

        <div className="control">
          <div className="tags has-addons">
            <button className="tag is-link">CSS</button>
            <button className="tag is-delete" />
          </div>
        </div>

        <div className="control">
          <div className="tags has-addons">
            <button className="tag is-link">Flexbox</button>
            <button className="tag is-delete" />
          </div>
        </div>

        <div className="control">
          <div className="tags has-addons">
            <button className="tag is-link">Web Design</button>
            <button className="tag is-delete" />
          </div>
        </div>

        <div className="control">
          <div className="tags has-addons">
            <button className="tag is-link">Open Source</button>
            <button className="tag is-delete" />
          </div>
        </div>

        <div className="control">
          <div className="tags has-addons">
            <button className="tag is-link">Community</button>
            <button className="tag is-delete" />
          </div>
        </div>

        <div className="control">
          <div className="tags has-addons">
            <button className="tag is-link">Documentation</button>
            <button className="tag is-delete" />
          </div>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default TagList
