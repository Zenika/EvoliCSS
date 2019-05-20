import React from 'react'
import ReactDOMServer from 'react-dom/server'
import pretty from 'prettify-html'
import { Sandbox as RawSandbox } from 'react-sandbox-editor'

const Sandbox = ({ children, js, css }) => (
  <RawSandbox
    displayMode="horizontal-split"
    executeOnCodeChange
    executeOnCodeChangeDebounce={1000}
    horizontalSplitOffset={30}
    permissions={[
      'allow-forms',
      'allow-pointer-lock',
      'allow-popups',
      'allow-modals',
      'allow-same-origin',
      'allow-scripts',
      'allow-top-navigation'
    ]}
    templateEditor={{
      defaultValue: pretty(ReactDOMServer.renderToStaticMarkup(children)),
      mode: 'html'
    }}
    scriptEditor={{
      defaultValue: js || '',
      mode: 'javascript'
    }}
    stylesheetEditor={{
      defaultValue: css || '',
      mode: 'css'
    }}
    preScript={`
      const cssLink = document.createElement('link')
      cssLink.href = "/lib/evoli.css"
      cssLink.rel = "stylesheet"
      cssLink.type = "text/css"
      document.head.appendChild(cssLink)
    `}
    theme="solarized_dark"
  />
)

export default Sandbox
