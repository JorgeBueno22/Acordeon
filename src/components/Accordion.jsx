import React from 'react'
import { AccordionItem } from './AccordionItem'
import datos from '../data.js';

export const Accordion = () => {
  return (
    <>
    <div>
       {datos.map((item, index) => (
        <AccordionItem  key={index} pregunta={item.pregunta} respuesta={item.respuesta} />
      ))}
    </div>
    </>
  )
}
