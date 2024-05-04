import React, { useState } from 'react'

export const AccordionItem = ({pregunta, respuesta}) => {

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked)
    }
    

  return (
    <>
    <ul className='accordion'>
       <li className={clicked === true ? 'accordion_item active' : 'accordion_item'}>
              <button className='button' onClick={handleClick}>{pregunta} <p>{clicked === true ? '-' : '+'}</p> </button>
              <div className={clicked === true ? 'answer_wrapper open' : 'answer_wrapper'}>{respuesta}</div> 
       </li>

    </ul>
    
        
    </>
  )
}
