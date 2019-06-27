import React from 'react'
import Figma from 'catalog/components/Figma'
import IconColors from './IconColors/IconColors'
import IconNormal from './IconNormal/IconNormal'
import IconSizes from './IconSizes/IconSizes'
import IconAll from './IconAll/IconAll'

const Icon = () => (
  <div>
    <h2>Icon</h2>
    <Figma nodeId="4%253A176" />
    Font Awesome needs to be installed for icons to work.
    <IconNormal />
    <IconColors />
    <IconSizes />
    <IconAll />
  </div>
)

export default Icon
