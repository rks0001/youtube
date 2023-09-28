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
  },[])
  return (
    <>
      <div className='w- full h-[600px] ml-2 p-2  bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      <div>
      {chatMessages.map((c, index)=>(<ChatMessage key={index} name={c.name} message={c.message}/>))}
      </div>
     
    </div>

    <form className='w-full p-2 ml-2 border border-black' onSubmit={(e) =>{e.preventDefault(); dispatch(addMessage({
      name:"Ranjit",
      message:liveMessage,
    }))
  setliveMessage("");
  }}>
        <input className=' px-2 w-96 border border-black' type="text" value={liveMessage} onChange={(e)=>{setliveMessage(e.target.value)}}/>
        <button className='px-2 mx-2 bg-green-200'>Send</button>
      </form>
    </>
  
  )
}

export default LiveChat