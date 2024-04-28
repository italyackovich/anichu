import React from 'react'

const MyInput = ({className, type, placeholder, style, onChange, value}) => {

  return (
    <div>
        <input
            className={className}
            type={type}
            value={value}
            style={style}
            placeholder={placeholder}
            onChange={onChange}
        />
    </div>
  )
}

export default MyInput