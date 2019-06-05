import React from 'react'
import Figma from 'catalog/components/Figma'
import SizesNormal from './SizesNormal/SizesNormal'
import SizesSystem from './SizesSystem/SizesSystem'
import SizesOffset from './SizesOffset/SizesOffset'
import SizesNarrow from './SizesNarrow/SizesNarrow'

const Sizes = () => (
  <div>
    <h2>Sizes</h2>
    <Figma nodeId="4%253A186" />
    <SizesNormal />
    <SizesSystem />
    <SizesOffset />
    <SizesNarrow />
  </div>
)
export default Sizes
