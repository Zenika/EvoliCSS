import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const FileModifiers = () => (
  <div>
    <h3>Modifiers</h3>
    <Sandbox>
      <div class="file has-name">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload" />
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
          <span class="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
        </label>
      </div>
    </Sandbox>
    <Sandbox>
      <div class="file has-name is-right">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload" />
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
          <span class="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
        </label>
      </div>
    </Sandbox>
    <Sandbox>
      <div class="file has-name is-fullwidth">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload" />
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
          <span class="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
        </label>
      </div>
    </Sandbox>
    <Sandbox>
      <div class="file is-boxed">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload" />
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
        </label>
      </div>
    </Sandbox>
    <Sandbox>
      <div class="file has-name is-boxed">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload" />
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
          <span class="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
        </label>
      </div>
    </Sandbox>
  </div>
)

export default FileModifiers
