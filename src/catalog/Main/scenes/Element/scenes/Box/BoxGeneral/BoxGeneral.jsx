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
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="reply">
                  <span class="icon is-small">
                    <i class="fas fa-reply" aria-hidden="true" />
                  </span>
                </a>
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small">
                    <i class="fas fa-retweet" aria-hidden="true" />
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small">
                    <i class="fas fa-heart" aria-hidden="true" />
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </Sandbox>
  </div>
)

export default BoxGeneral
