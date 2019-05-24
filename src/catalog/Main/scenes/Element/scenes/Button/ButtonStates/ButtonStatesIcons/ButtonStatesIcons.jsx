import React from 'react'
import Sandbox from 'catalog/components/Sandbox/Sandbox'

const ButtonStatesIcons = () => (
  <div>
    <h4>Icons</h4>
    <Sandbox>
      <p className="buttons">
        <a className="button">
          <span className="icon is-small">
            <i className="fas fa-bold" />
          </span>
        </a>
        <a className="button">
          <span className="icon is-small">
            <i className="fas fa-italic" />
          </span>
        </a>
        <a className="button">
          <span className="icon is-small">
            <i className="fas fa-underline" />
          </span>
        </a>
      </p>
      <p className="buttons">
        <a className="button">
          <span className="icon">
            <i className="fab fa-github" />
          </span>
          <span>GitHub</span>
        </a>
        <a className="button is-primary">
          <span className="icon">
            <i className="fab fa-twitter" />
          </span>
          <span>Twitter</span>
        </a>
        <a className="button is-success">
          <span className="icon is-small">
            <i className="fas fa-check" />
          </span>
          <span>Save</span>
        </a>
        <a className="button is-danger is-outlined">
          <span>Delete</span>
          <span className="icon is-small">
            <i className="fas fa-times" />
          </span>
        </a>
      </p>
      <p className="buttons">
        <a className="button is-small">
          <span className="icon is-small">
            <i className="fab fa-github" />
          </span>
          <span>GitHub</span>
        </a>
        <a className="button">
          <span className="icon">
            <i className="fab fa-github" />
          </span>
          <span>GitHub</span>
        </a>
        <a className="button is-medium">
          <span className="icon">
            <i className="fab fa-github" />
          </span>
          <span>GitHub</span>
        </a>
        <a className="button is-large">
          <span className="icon is-medium">
            <i className="fab fa-github" />
          </span>
          <span>GitHub</span>
        </a>
      </p>
    </Sandbox>
    <Sandbox>
      <p className="buttons">
        <a className="button is-small">
          <span className="icon is-small">
            <i className="fas fa-heading" />
          </span>
        </a>
      </p>
      <p className="buttons">
        <a className="button">
          <span className="icon is-small">
            <i className="fas fa-heading" />
          </span>
        </a>
        <a className="button">
          <span className="icon">
            <i className="fas fa-heading fa-lg" />
          </span>
        </a>
      </p>
      <p className="buttons">
        <a className="button is-medium">
          <span className="icon is-small">
            <i className="fas fa-heading" />
          </span>
        </a>
        <a className="button is-medium">
          <span className="icon">
            <i className="fas fa-heading fa-lg" />
          </span>
        </a>
        <a className="button is-medium">
          <span className="icon is-medium">
            <i className="fas fa-heading fa-2x" />
          </span>
        </a>
      </p>
      <p className="buttons">
        <a className="button is-large">
          <span className="icon is-small">
            <i className="fas fa-heading" />
          </span>
        </a>
        <a className="button is-large">
          <span className="icon">
            <i className="fas fa-heading fa-lg" />
          </span>
        </a>
        <a className="button is-large">
          <span className="icon is-medium">
            <i className="fas fa-heading fa-2x" />
          </span>
        </a>
      </p>
    </Sandbox>
  </div>
)

export default ButtonStatesIcons
