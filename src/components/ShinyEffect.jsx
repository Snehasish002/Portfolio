import React from 'react'

const shinyEffect = ({left, right, top, size = 500}) => {
    const positionStyles = {
        top:`${top}px`,
        width:`${size}px`,
        height:`${size}px`,
        zIndex: -1
    }

    if (left !== undefined) {
        positionStyles.left = `${left}px`
    }

    if (right !== undefined) {
        positionStyles.right = `${right}px`
    }


  return (
    <div className='shiny-effect' style={positionStyles}></div>
  )
}

export default shinyEffect
