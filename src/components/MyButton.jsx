import React from 'react'

const MyButton = ({text, className, type, onClick}) => {
    
  return (
    <div>
        <button 
            className={className}
            type={type}
            onClick={onClick}
        >{text}
        </button>
    </div>
  )
}

export default MyButton