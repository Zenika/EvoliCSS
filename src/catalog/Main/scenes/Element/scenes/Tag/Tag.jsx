import React from 'react'
import Figma from 'catalog/components/Figma'
import TagNormal from './TagNormal/TagNormal'
import TagColors from './TagColors/TagColors'
import TagSizes from './TagSizes/TagSizes'
import TagModifiers from './TagModifiers/TagModifiers'

const Tag = () => (
  <div>
    <h2>Tag</h2>
    <Figma nodeId="4%253A148" />
    <TagNormal />
    <TagColors />
    <TagSizes />
    <TagModifiers />
  </div>
)

export default Tag
