import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
    
        <img className="h-10" alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpbF9MRc872DyqrFDJJ3MRq68r08IaEKCNGzAqYNpeSK38HOao_E2_50CtB2V4TGM_5ag&usqp=CAU"/>
        
        
        <span className='p-2 font-bold'>{name}</span>
        <span className='py-2'>{message}</span>
     
        
    </div>
  )
}

export default ChatMessage