import React from 'react'
import Figma from 'catalog/components/Figma'
import GeneralNormal from './GeneralNormal/GeneralNormal'
import GeneralField from './GeneralField/GeneralField'
import GeneralControl from './GeneralControl/GeneralControl'
import GeneralIcons from './GeneralIcons/GeneralIcons'
import GeneralAddons from './GeneralAddons/GeneralAddons'
import GeneralGroup from './GeneralGroup/GeneralGroup'
import GeneralHorizontal from './GeneralHorizontal/GeneralHorizontal'
import GeneralDisabled from './GeneralDisabled/GeneralDisabled'

const General = () => (
  <div>
    <h2>General</h2>
    <Figma nodeId="4%253A206" />
    <GeneralNormal />
    <GeneralField />
    <GeneralControl />
    <GeneralIcons />
    <GeneralAddons />
    <GeneralGroup />
    <GeneralHorizontal />
    <GeneralDisabled />
  </div>
)

export default General
