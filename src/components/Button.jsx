import React from 'react'

function Button({type, className, label}) {
  return (
    <button type={type} className={className}>
        {label}
    </button>
  )
}

export default Button