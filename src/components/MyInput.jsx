import React from 'react'

const MyInput = ({ id, className, type, placeholder, style, onChange, value, onFocus }) => {

  return (
    <input
      className={className}
      type={type}
      value={value}
      style={style}
      placeholder={placeholder}
      onChange={onChange}
      id={id}
      onFocus={onFocus}
    />
  )
}

export default MyInput