import React from 'react'
import Button from './Button'


const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricker", "Cooking", "News"]
const ButtonList = () => {
  return (
    <div className='flex mt-2 justify-items-start pl-10 text-sm font-medium '>
        {list.map((btn, index) =>(<Button key={index} name={btn} />))}
    </div>
  )
}

export default ButtonList