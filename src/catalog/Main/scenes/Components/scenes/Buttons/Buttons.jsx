import React from 'react'
import {Sandbox, withDependencies} from 'react-sandbox-editor'
import '../../../../../../library/buttons.scss'

const ReactSandbox = withDependencies([
    'https://unpkg.com/react@16.6.0/umd/react.development.js',
    'https://unpkg.com/react-dom@16.6.0/umd/react-dom.development.js'
  ])(Sandbox)

const Buttons = () => <ReactSandbox
  classes={{
    header: undefined
  }}
  dependencies={['http://localhost:3000/evoli.css']}
  displayMode="horizontal-split"
  executeOnCodeChange
  executeOnCodeChangeDebounce={1000}
  horizontalSplitOffset={20}
  onDisplayModeButtonClick={function(){}}
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
    defaultValue: 
                '<div>\n' +
                '   <button className="btn-primary">Valider</button>\n' +
                '</div>',
    mode: 'html'
  }}
  scriptEditor={{
    mode: 'javascript'
  }}
  theme="tomorrow"
/>

export default Buttons
