import React, { useState } from 'react'

const MyInput = ({className, type, placeholder, style}) => {

    const [value, setValue] = useState('')

  return (
    <div>
        <input
            className={className}
            type={type}
            value={value}
            style={style}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
        />
    </div>
  )
}

export default MyInput