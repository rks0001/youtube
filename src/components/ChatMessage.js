import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2 bg-[#1f1f1f]'>
    
        <FaUserCircle style={{color:'#74AA9C', fontSize:'20px'}}/>
        
        
        <span className='p-2 font-bold'>{name}</span>
        <span className='py-2'>{message}</span>
     
        
    </div>
  )
}

export default ChatMessage