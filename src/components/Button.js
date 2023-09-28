import React from 'react'

const Button = ({name}) => {
  return (
    <div className='px-5 py-2 m-2 bg-gray-600 text-white rounded-md hover:bg-gray-500'>{name}</div>
  )
}

export default Button