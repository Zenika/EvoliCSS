import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const FileSizes = () => (
  <div>
    <h3>Alignment</h3>
    <Sandbox>
      <div class="field">
        <div class="file is-centered is-boxed is-success has-name">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload" />
              </span>
              <span class="file-label">Centered file…</span>
            </span>
            <span class="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
          </label>
        </div>
      </div>
    </Sandbox>
    <Sandbox>
      <div class="field">
        <div class="file is-right is-info">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload" />
              </span>
              <span class="file-label">Right file…</span>
            </span>
            <span class="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
          </label>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default FileSizes
