import React from 'react'

function ClassForAlert(status) {
  let className = "alert alert-"
  switch (status) {
    case 'primary': 
      className += "primary";
      break;
    case 'secondary': 
      className += 'secondary';
      break;
    case 'success': 
      className += 'success';
      break;
    case 'danger': 
      className += 'danger';
      break;
    case 'warning': 
      className += "warning";
      break;
    case 'info': 
      className += "info";
      break;
    case 'light': 
      className += "light";
      break;
    case 'dark': 
      className += "dark";
      break;
    default: 
      className += 'secondary'
  }
  return className
}

function Alert({
  children,
  status
}) {

  return (
    <div className={ ClassForAlert(status) } role="alert">
    {children}
    </div>
  )
}

export default Alert