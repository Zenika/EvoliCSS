import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const FileColors = () => (
  <div>
    <h3>Colors</h3>
    <Sandbox>
      <div class="field">
        <div class="file is-primary">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload" />
              </span>
              <span class="file-label">Primary file…</span>
            </span>
          </label>
        </div>
      </div>

      <div class="field">
        <div class="file is-info has-name">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload" />
              </span>
              <span class="file-label">Info file…</span>
            </span>
            <span class="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
          </label>
        </div>
      </div>

      <div class="field">
        <div class="file is-warning is-boxed">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-cloud-upload-alt" />
              </span>
              <span class="file-label">Warning file…</span>
            </span>
          </label>
        </div>
      </div>

      <div class="field">
        <div class="file is-danger has-name is-boxed">
          <label class="file-label">
            <input class="file-input" type="file" name="resume" />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-cloud-upload-alt" />
              </span>
              <span class="file-label">Danger file…</span>
            </span>
            <span class="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
          </label>
        </div>
      </div>
    </Sandbox>
  </div>
)

export default FileColors
