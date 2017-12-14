import React from 'react'

function ButtonGroup({
  children
}) {
  return (
    <div className='button-group' role='group'>{children}</div>
  )
}

export default ButtonGroup