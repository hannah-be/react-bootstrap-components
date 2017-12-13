import React from 'react'

const Progress = ({
  className="progress-bar bg-info",
  width="2rem",
  valueNow='100%'
}) => (
  <div className="progress">
    <div 
    className={className}
    role="progressbar" 
    style={{width: width}} 
    aria-valuenow={valueNow}
    aria-valuemin="0" 
    aria-valuemax="100"></div>
  </div>

)

export default Progress