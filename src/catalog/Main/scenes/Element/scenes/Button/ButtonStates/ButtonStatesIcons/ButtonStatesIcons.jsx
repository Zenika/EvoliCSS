import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesIcons = () => (
  <div>
    <h4>Icons</h4>
    <Sandbox>
      <p className="buttons">
        <button className="button">
          <span className="icon is-small">
            <i className="fas fa-bold" />
          </span>
        </button>
        <button className="button">
          <span className="icon is-small">
            <i className="fas fa-italic" />
          </span>
        </button>
        <button className="button">
          <span className="icon is-small">
            <i className="fas fa-underline" />
          </span>
        </button>
      </p>
      <p className="buttons">
        <button className="button">
          <span className="icon">
            <i className="fab fa-github" />
          </span>
          <span>GitHub</span>
        </button>
        <button className="button is-primary">
          <span className="icon">
            <i className="fab fa-twitter" />
          </span>
          <span>Twitter</span>
        </button>
        <button className="button is-success">
          <span className="icon is-small">
            <i className="fas fa-check" />
          </span>
          <span>Save</span>
        </button>
        <button className="button is-danger is-outlined">
          <span>Delete</span>
          <span className="icon is-small">
            <i className="fas fa-times" />
          </span>
        </button>
      </p>
      <p className="buttons">
        <button className="button is-small">
          <span className="icon is-small">
            <i className="fab fa-github" />
          </span>
          <span>GitHub</span>
        </button>
        <button className="button">
          <span className="icon">
            <i className="fab fa-github" />
          </span>
          <span>GitHub</span>
        </button>
        <button className="button is-medium">
          <span className="icon">
            <i className="fab fa-github" />
          </span>
          <span>GitHub</span>
        </button>
        <button className="button is-large">
          <span className="icon is-medium">
            <i className="fab fa-github" />
          </span>
          <span>GitHub</span>
        </button>
      </p>
    </Sandbox>
    <Sandbox>
      <p className="buttons">
        <button className="button is-small">
          <span className="icon is-small">
            <i className="fas fa-heading" />
          </span>
        </button>
      </p>
      <p className="buttons">
        <button className="button">
          <span className="icon is-small">
            <i className="fas fa-heading" />
          </span>
        </button>
        <button className="button">
          <span className="icon">
            <i className="fas fa-heading fa-lg" />
          </span>
        </button>
      </p>
      <p className="buttons">
        <button className="button is-medium">
          <span className="icon is-small">
            <i className="fas fa-heading" />
          </span>
        </button>
        <button className="button is-medium">
          <span className="icon">
            <i className="fas fa-heading fa-lg" />
          </span>
        </button>
        <button className="button is-medium">
          <span className="icon is-medium">
            <i className="fas fa-heading fa-2x" />
          </span>
        </button>
      </p>
      <p className="buttons">
        <button className="button is-large">
          <span className="icon is-small">
            <i className="fas fa-heading" />
          </span>
        </button>
        <button className="button is-large">
          <span className="icon">
            <i className="fas fa-heading fa-lg" />
          </span>
        </button>
        <button className="button is-large">
          <span className="icon is-medium">
            <i className="fas fa-heading fa-2x" />
          </span>
        </button>
      </p>
    </Sandbox>
  </div>
)

export default ButtonStatesIcons
