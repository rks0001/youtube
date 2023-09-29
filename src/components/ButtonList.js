import React from 'react'
import Button from './Button'


const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricker", "Cooking", "News"]
const ButtonList = () => {
  return (
    <div className='flex pt-2 justify-items-start pl-4 text-sm font-medium  bg-[#0f0f0f]'>
        {list.map((btn, index) =>(<Button key={index} name={btn} />))}
    </div>
  )
}

export default ButtonList