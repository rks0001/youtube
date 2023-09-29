import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-5 py-2 m-2 bg-[#272727] text-white rounded-md hover:bg-[#1f1f1f]'>{name}</div>
  )
}

export default Button