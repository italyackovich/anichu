import React, { useState } from 'react'

const MyInput = ({className, type, placeholder}) => {

    const [value, setValue] = useState('')

  return (
    <div>
        <input
            className={className}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
        />
    </div>
  )
}

export default MyInput