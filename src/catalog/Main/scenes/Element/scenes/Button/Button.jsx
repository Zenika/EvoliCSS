import React from 'react'
import Figma from 'catalog/components/Figma'
import ButtonGeneral from './ButtonGeneral/ButtonGeneral'
import ButtonColors from './ButtonColors/ButtonColors'
import ButtonSizes from './ButtonSizes/ButtonSizes'
import ButtonDisplays from './ButtonDisplays/ButtonDisplays'
import ButtonStyles from './ButtonSytles/ButtonStyles'
import ButtonStates from './ButtonStates/ButtonStates'
import ButtonGroup from './ButtonGroup/ButtonGroup'
import ButtonAddons from './ButtonAddons/ButtonAddons'
import ButtonGroupAddons from './ButtonGroupAddons/ButtonGroupAddons'
import ButtonList from './ButtonList/ButtonList'
import ButtonVariables from './ButtonVariables/ButtonVariables'

const Button = () => (
  <div>
    <h2>Button</h2>
    <Figma nodeId="4%253A166" />
    <p>
      The button is an essential element of any design. It's meant to look and behave as an
      interactive element of your page.
    </p>
    <ButtonGeneral />
    <ButtonColors />
    <ButtonSizes />
    <ButtonDisplays />
    <ButtonStyles />
    <ButtonStates />
    <ButtonGroup />
    <ButtonAddons />
    <ButtonGroupAddons />
    <ButtonList />
    <ButtonVariables />
  </div>
)

export default Button
