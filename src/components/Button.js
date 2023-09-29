import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-3 py-1 mr-2 ml-2 mt-2  bg-[#272727] text-white text-sm rounded-md hover:bg-[#1f1f1f]'>{name}</div>
  )
}

export default Button