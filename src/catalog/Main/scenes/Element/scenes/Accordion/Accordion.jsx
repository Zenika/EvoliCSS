import React from 'react'
import AccordionGeneral from './AccordionGeneral/AccordionGeneral'
import AccordionButton from './AccordionButton/AccordionButton'
import AccordionColors from './AccordionColors/AccordionColors'
import AccordionIcon from './AccordionIcon/AccordionIcon'
import AccordionBorder from './AccordionBorder/AccordionBorder'

const Accordion = () => (
  <div>
    <h2>Accordion</h2>
    <AccordionGeneral />
    <AccordionColors />
    <AccordionButton />
    <AccordionIcon />
    <AccordionBorder />
  </div>
)

export default Accordion
