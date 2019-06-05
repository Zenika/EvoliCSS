import React from 'react'
import TextareaStatesNormal from './TextareaStatesNormal/TextareaStatesNormal'
import TextareaStatesHover from './TextareaStatesHover/TextareaStatesHover'
import TextareaStatesFocus from './TextareaStatesFocus/TextareaStatesFocus'
import TextareaStatesLoading from './TextareaStatesLoading/TextareaStatesLoading'
import TextareaStatesDisabled from './TextareaStatesDisabled/TextareaStatesDisabled'
import TextareaStatesReadOnly from './TextareaStatesReadOnly/TextareaStatesReadOnly'
import TextareaStatesFixedSize from './TextareaStatesFixedSize/TextareaStatesFixedSize'

const TextareaStates = () => (
  <div>
    <h3>Sizes</h3>
    <TextareaStatesNormal />
    <TextareaStatesHover />
    <TextareaStatesFocus />
    <TextareaStatesLoading />
    <TextareaStatesDisabled />
    <TextareaStatesReadOnly />
    <TextareaStatesFixedSize />
  </div>
)

export default TextareaStates
