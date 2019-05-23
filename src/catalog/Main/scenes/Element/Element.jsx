import React from 'react'
import { Route } from 'react-router-dom'
import Iframe from 'catalog/components/Iframe'

import Box from './scenes/Box'
import Button from './scenes/Button'
import Content from './scenes/Content'
import Delete from './scenes/Delete'
import Icon from './scenes/Icon'
import Image from './scenes/Image'
import Notification from './scenes/Notification'
import ProgressBars from './scenes/Progress-bars'
import Table from './scenes/Table'
import Tag from './scenes/Tag'
import Title from './scenes/Title'

const Element = ({ match }) => (
  <>
    <h1>Element</h1>
    <Iframe
      id="element"
      src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFNTIGdJacxKH3DHRkomttIFv%2FEvoliCSS%3Fnode-id%3D4%253A94"
    />
    <Route path={match.path + '/box'} component={Box} />
    <Route path={match.path + '/button'} component={Button} />
    <Route path={match.path + '/content'} component={Content} />
    <Route path={match.path + '/delete'} component={Delete} />
    <Route path={match.path + '/icon'} component={Icon} />
    <Route path={match.path + '/image'} component={Image} />
    <Route path={match.path + '/notification'} component={Notification} />
    <Route path={match.path + '/progress-bars'} component={ProgressBars} />
    <Route path={match.path + '/table'} component={Table} />
    <Route path={match.path + '/tag'} component={Tag} />
    <Route path={match.path + '/title'} component={Title} />
  </>
)

export default Element
