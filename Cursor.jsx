import React, { useEffect } from 'react'
import { useState } from 'react'
import {motion} from 'framer-motion'
import './Cursor.css'

const Cursor = () => {
const [maus, setMaus] = useState({
    x:0,
    y:0
})

const mouseMove = (e) =>{
    setMaus({
        x:e.clientX,
        y:e.clientY,
    })

}

useEffect(()=>{
window.addEventListener('mousemove', mouseMove)
},[])

const variants = {
    default:{
        x:maus.x - 16,
        y:maus.y - 16
    }
}

  return (
    <motion.div 
    className='cursor'
    variants={variants}
    animate="default"
    />
  )
}

export default Cursor