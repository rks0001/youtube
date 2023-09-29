import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice';
import { generateRandomMessage, generateRandomName } from '../utils/helper';

const LiveChat = () => {

  const [liveMessage, setliveMessage] = useState("");

  const dispatch = useDispatch();

  const chatMessages = useSelector((store)=> store.chat.messages);

  useEffect(()=>{
const i = setInterval(()=>{

  // API Polling 

  dispatch(addMessage({
    name:generateRandomName(), 
    message:generateRandomMessage(20) + "🙏",
  }));
},2000)

return () =>{
 clearInterval(i);
}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
    <h1 className='text-white font-semibold p-2 text-xl'>Live Chat</h1>
      <div className='w-full h-96 ml-2 p-2  bg-[#1f1f1f] rounded-lg overflow-y-scroll flex flex-col-reverse text-white'>
      <div>
      {chatMessages.map((c, index)=>(<ChatMessage key={index} name={c.name} message={c.message}/>))}
      </div>
     
    </div>

    <form className='w-full p-2 ml-2 border border-black flex flex-row' onSubmit={(e) =>{e.preventDefault(); dispatch(addMessage({
      name:"Ranjit",
      message:liveMessage,
    }))
  setliveMessage("");
  }}>
        <input className=' px-2 w-96 border border-black' type="text" value={liveMessage} onChange={(e)=>{setliveMessage(e.target.value)}}/>
        <button className='px-4 py-2 mx-2 bg-[#74AA9C] text-white font-semibold rounded-md'>Send</button>
      </form>
    </>
  
  )
}

export default LiveChat