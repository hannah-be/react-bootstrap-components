import React from 'react'

const Progress = ({
  type='',
  width=0,
  children
}) => (
  <div className="progress">
    <div 
    className={`progress-bar ${type}`}
    role="progressbar" 
    style={{width: `${width}%`}} 
    aria-valuenow={width}
    aria-valuemin="0" 
    aria-valuemax="100">{children}</div>
  </div>

)

export default Progress