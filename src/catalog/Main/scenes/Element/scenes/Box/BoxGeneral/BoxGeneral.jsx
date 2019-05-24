import React from 'react'
import Sandbox from 'catalog/components/Sandbox'

const BoxGeneral = () => (
  <div>
    <h3>Box General</h3>
    <Sandbox>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="placeholder" />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>FAQ</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet
                massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
          </div>
        </article>
      </div>
    </Sandbox>
  </div>
)

export default BoxGeneral
