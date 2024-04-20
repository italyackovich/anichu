import React from 'react'

const MyButton = ({text, className, type}) => {
  return (
    <div>
        <button 
            className={className}
            type={type}
        >{text}
        </button>
    </div>
  )
}

export default MyButton